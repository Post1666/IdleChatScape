const socket = io();

const form = document.getElementById("chat-form");
const input = document.getElementById("msg-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (input.value.trim() !== "") {
        socket.emit("chatMessage", input.value);
        input.value = "";
    }
});

socket.on("chatMessage", msg => {
    const div = document.createElement("div");
    div.textContent = msg;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
});
