// Function to send a message to the chatbot
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Get user's message
    const userMessage = userInput.value;

    // Display user's message in the chat box
    chatBox.innerHTML += `<div class="user-message">You: ${userMessage}</div>`;

    // Clear the input field
    userInput.value = "";
    console.log(userMessage);

    // Send the user's message to the server (localhost:5000) using fetch
    fetch("http://localhost:5001/chatbot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        // Display the chatbot's response in the chat box
        chatBox.innerHTML += `<div class="chatbot-message">Chatbot: ${data.message}</div>`;
    })
    .catch(error => {
        console.error("Error sending/receiving messages:", error);
    });
}
