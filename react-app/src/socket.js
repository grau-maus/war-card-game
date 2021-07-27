import io from "socket.io-client";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

});

export default socket;
