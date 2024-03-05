import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";

const socket = io("http://localhost:4000");

function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));

    socket.on("chat_message", (data) => {
      setMensajes((mensajes) => [...mensajes, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, [socket]);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!nuevoMensaje) return;
    socket.emit("chat_message", {
      usuario: socket.id,
      mensaje: nuevoMensaje,
    });
    ref.current?.reset();
    setNuevoMensaje("");
  };

  // posicionar con tailwind este componente de chat en la esquina inferior derecha

  return (
    <div className=" text-slate-200 bg-slate-800 w-5/12 fixed bottom-0 right-0 p-5">
      <h2 className="pb-3">{isConnected ? "CONECTADO" : "NO CONECTADO"}</h2>
      <div  className=" placeholder-gray-500">
      <ul>
        {mensajes.map((mensaje, index) => (
          <li key={index} className="py-1">
            {" "}
            {mensaje.usuario}: {mensaje.mensaje}
          </li>
        ))}
      </ul>
      </div>
      <form ref={ref}>
        <input
          className="w-10/12 p-2 rounded-md bg-slate-900 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          placeholder="Escribe un mensaje..."
          type="text"
          onChange={(e) => setNuevoMensaje(e.target.value)}
        />
        <button className=" px-5" onClick={enviarMensaje}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;
