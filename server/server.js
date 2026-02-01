const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));




io.on("connection", socket => {
    console.log("A user connected:", socket.id);

    socket.on("chatMessage", msg => {
        io.emit("chatMessage", msg);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

http.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

