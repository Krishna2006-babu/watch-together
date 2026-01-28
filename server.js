console.log("Starting server...");

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.roomId = roomId;

    const room = io.sockets.adapter.rooms.get(roomId);

    // First user becomes host
    if (room.size === 1) {
      socket.isHost = true;
      socket.emit("host");
      console.log("Host assigned:", socket.id);
    }

    console.log(`${socket.id} joined room ${roomId}`);
  });

  socket.on("play-video", () => {
    if (!socket.isHost) return;
    io.to(socket.roomId).emit("play-video");
  });

  socket.on("pause-video", () => {
    if (!socket.isHost) return;
    io.to(socket.roomId).emit("pause-video");
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// 🔥 THIS WAS MISSING
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
