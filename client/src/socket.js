import { io } from "socket.io-client";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const socket = io(API_BASE_URL); // Cambia esta URL a la de tu servidor
export default socket;
