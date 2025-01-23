import { io } from "socket.io-client";

const socket = io("http://localhost:3002"); // Cambia esta URL a la de tu servidor
export default socket;
