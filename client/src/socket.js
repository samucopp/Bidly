import { io } from "socket.io-client";

const socket = io("http://192.168.0.125:3002"); // Cambia esta URL a la de tu servidor
export default socket;
