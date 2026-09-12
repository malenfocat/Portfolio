const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbot = document.getElementById("chatbot");

const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");


openChat.addEventListener("click", () => {
    chatbot.style.display = "flex";
    messageInput.focus();
});


closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});


chatForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const message = messageInput.value.trim();

    if (!message) {
        return;
    }

    addMessage(message, "user");

    messageInput.value = "";

    // De momento simulamos una respuesta.
    setTimeout(() => {

        addMessage(
            "Gracias por tu mensaje. Pronto podré responderte utilizando la información del hotel.",
            "bot"
        );

    }, 500);
});


function addMessage(text, type) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("message", type);

    messageElement.textContent = text;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}