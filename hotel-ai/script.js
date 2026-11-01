
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbot = document.getElementById("chatbot");

const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");

const N8N_WEBHOOK_URL =
    "https://n8n.malenfocat.com/webhook/hotel-ai-chat";


openChat.addEventListener("click", () => {
    chatbot.style.display = "flex";
    messageInput.focus();
});


closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});


chatForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const message = messageInput.value.trim();

    if (!message) {
        return;
    }

    // Mostrar el mensaje del usuario
    addMessage(message, "user");

    // Vaciar el campo de texto
    messageInput.value = "";

    // Mostrar mensaje de espera
    const loadingMessage = addMessage(
        "Estoy consultando la información del hotel...",
        "bot"
    );

    try {

        const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })
        });

        if (!response.ok) {
            throw new Error("Error en la respuesta de n8n");
        }

        const data = await response.json();

        // Eliminar el mensaje de espera
        loadingMessage.remove();

        // Mostrar respuesta real de OpenAI
        addMessage(data.reply, "bot");

    } catch (error) {

        console.error("Error del chatbot:", error);

        loadingMessage.remove();

        addMessage(
            "Lo siento, no puedo responder en este momento. Por favor, inténtalo de nuevo.",
            "bot"
        );

    }

});


function addMessage(text, type) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("message", type);

    messageElement.textContent = text;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageElement;
}