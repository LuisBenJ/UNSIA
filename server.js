function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (input.value.trim() === "") return;

    // mensaje usuario
    const userMsg = document.createElement("div");
    userMsg.className = "msg-user";
    userMsg.textContent = input.value;
    chatBox.appendChild(userMsg);

    // respuesta bot (simulada)
    const botMsg = document.createElement("div");
    botMsg.className = "msg-bot";
    botMsg.textContent = "Estoy procesando tu pregunta...";
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}