import os
import ast
import logging
from flask import Flask, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import google.generativeai as genai
import uuid
import datetime
from dotenv import load_dotenv

# === Load .env for local dev ===
load_dotenv()

# ========== API Key Management ==========
GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise RuntimeError("GOOGLE_API_KEY not set in environment!")
genai.configure(api_key=GOOGLE_API_KEY)

# ========== Flask + SocketIO ==========
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
app.config['SECRET_KEY'] = os.environ.get('FLASK_SECRET_KEY', 'secret!')
socketio = SocketIO(app, cors_allowed_origins=["http://localhost:5173"])

# ========== Najdi Gemini Persona ==========
SAUDI_PROMPT = (
    "أنت مساعد ذكي تتحدث بلهجة أهل الرياض تحديدًا."
    " ردودك قصيرة، واضحة، صادقة، وبعيدة عن الرسمية أو التكرار."
    " تتكلم وكأنك شخص عايش في حي بالخرج أو السويدي."
    " استخدم مصطلحات مثل: 'وش السالفة؟'، 'علومك؟'، 'كفو والله'، 'وش عندك؟'، 'تامر أمر'، 'وش تبي أقول؟'، 'أجل نزينها'، 'سمّ'."
    " لا تستخدم كلمات فصحى أو إنجليزية إلا إذا كانت مستخدمة فعليًا في كلام أهل الرياض."
    " خلك عفوي، وعطني ردود واقعية حسب السياق بدون مبالغة."
    " إذا طلب المستخدم نكتة، عطه نكتة شعبية معروفة من نجد."
    " إذا طلب نصيحة، عطه كلام من القلب وكأنك واحد من أخوياه."
    " إذا سألك عن شي بسيط زي الطقس أو الوقت، عطه رد تلقائي مثل: 'حرّ شوي، خذ لك ليمون بارد' أو 'الساعة حول 3، وش تبي تسوي؟'."
    " إذا قال احسب، نفذ العملية الحسابية ورد كأنك تفكر بصوت عالي."
    " لا تستخدم رموز تعبيرية كثير، خلك طبيعي."
)

# ========== Safe Math ==========
def safe_eval(expr):
    allowed = "0123456789+-*/(). "
    if any(c not in allowed for c in expr):
        return "❌ مسموح بس العمليات الحسابية البسيطة."
    try:
        result = ast.literal_eval(expr)
        return f"= {result}"
    except Exception:
        return "🧐 ما فهمت العملية، حاول تكتبها أوضح."

# ========== Per-user Chat Session ==========
user_sessions = {}  # {sid: chat_session}

# ========== Save chat logs ==========
def save_chat_log(session_id, user_input, bot_response):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] USER: {user_input}\n[{timestamp}] BOT: {bot_response}\n\n"
    os.makedirs("chat_logs", exist_ok=True)
    with open(f"chat_logs/{session_id}.txt", "a", encoding="utf-8") as file:
        file.write(log_entry)

# ========== WebSocket Handler ==========
@socketio.on("send_message")
def handle_message(data):
    sid = request.sid
    user_message = str(data).strip()
    session_id = str(uuid.uuid4())
    logging.info(f"[{sid}] User: {user_message}")

    if not user_message:
        emit("recive_message", "👀 وش تبي أساعدك فيه؟ قل لي.")
        return

    # Handle math
    if user_message.lower().startswith("احسب"):
        expr = user_message.replace("احسب", "").strip()
        reply = safe_eval(expr)
        save_chat_log(session_id, user_message, reply)
        emit("recive_message", reply)
        return

    # Multi-turn Gemini session per user
    try:
        if sid not in user_sessions:
            model = genai.GenerativeModel(
                model_name="gemini-1.5-flash",
                system_instruction=SAUDI_PROMPT
            )
            user_sessions[sid] = model.start_chat(history=[])
        chat_session = user_sessions[sid]
        response = chat_session.send_message(user_message)
        reply = response.text.strip()
        save_chat_log(session_id, user_message, reply)
        emit("recive_message", reply)
    except Exception as e:
        logging.exception("❌ Gemini API Error")
        emit("recive_message", "🚫 صار شي غريب، جرب بعدين.")

# ========== Cleanup on disconnect ==========
@socketio.on('disconnect')
def handle_disconnect():
    sid = request.sid
    if sid in user_sessions:
        del user_sessions[sid]

# ========== Healthcheck ==========
@app.route("/")
def home():
    return "✅ Najdi Riyadh-style Gemini Agent is Live 🇸🇦"

# ========== Run ==========
if __name__ == '__main__':
    import eventlet
    logging.basicConfig(level=logging.INFO)
    socketio.run(app, debug=False, port=5000, host='0.0.0.0')
