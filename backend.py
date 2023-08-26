from flask import Flask, request, jsonify, render_template, url_for
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# In-memory storage for chat messages (you might want to use a database in a production environment)
chat_history = []

@app.route('/', strict_slashes=False)
def home():
    return render_template('index.html')

@app.route('/chatbot', methods=['POST'], strict_slashes=False)
def chatbot():
    user_message = request.json['message']

    # Simulate chatbot's response 
    chatbot_response = "Hello! You said: " + user_messageg

    # Store the chat message and chatbot's response
    chat_history.append({'user': user_message, 'chatbot': chatbot_response})

    return jsonify({'message': chatbot_response})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
