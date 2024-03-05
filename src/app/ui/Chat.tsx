import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";

const socket = io("http://192.168.1.94:4000");

function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [usuario, setUsuario] = useState("");

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {

    socket.on("chat_message", (data) => {
      setMensajes((mensajes) => [...mensajes, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, [usuario.length]);

  useEffect(() => {
    if (socket.connected) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [setIsConnected]);

  const enviarMensaje = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!nuevoMensaje) return;
    socket.emit("chat_message", {
      usuario: usuario || "Anónimo",
      mensaje: nuevoMensaje,
    });
    ref.current?.reset();
    setNuevoMensaje("");
  };

  const openChat = () => {
    socket.on("connet", () => console.log("conectado"));
    setIsConnected(true)
  };

  const closeChat = () => {
    socket.on("disconnect", () => console.log("desconectado"));
    setIsConnected(false)
  };

  return (
    <div className=" text-slate-200 bg-slate-800 w-6/12 fixed bottom-0 right-0 p-5 z-50 ">
      <div className="flex justify-between">
        <h2 className="pb-3">{isConnected ? "CONECTADO" : "NO CONECTADO"}</h2>
        <button
          onClick={closeChat}
          className="bg-red-500 p-2 rounded-sm text-white"
        >
          x
        </button>
      </div>

      <div className=" placeholder-gray-500">
        {isConnected && (
        <ul>
          {mensajes.map((mensaje, index) => (
            <li key={index} className="py-1">
              {" "}
              {mensaje.usuario}: {mensaje.mensaje}
            </li>
          ))}
        </ul>)}
      </div>
      {!isConnected ? (
        <button
          className=" bg-green-500 text-gray-300 p-3 rounded-sm"
          onClick={openChat}
        >
          Conectar
        </button>
      ) : (
        <form ref={ref} className="flex">
          {mensajes.length > 0 ? null : (
            <input
              placeholder="Tu nombre"
              className=" mx-1 w-10/12 p-2 rounded-md bg-slate-900 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              type="text"
              onChange={(e) => setUsuario(e.target.value)}
            />
          )}
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
      )}
    </div>
  );
}

export default Chat;
