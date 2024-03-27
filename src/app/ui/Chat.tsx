import './App.css';
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

const socket = io('http://localhost:4000');

type Mensaje = {
  id: string;
  usuario: string;
  mensaje: string;
}

function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

useEffect(() => {

    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
        // setMensajes((mensajes): []never =>{ [...mensajes, data]});
        setMensajes((mensajes: Mensaje[]) => [...mensajes, data]);
      
      });

    return () => {
        socket.off('connect');
        socket.off('chat_message');
    }

}, []);

  const enviarMensaje = () => {
    socket.emit('chat_message', {
      usuario: socket.id,
      mensaje: nuevoMensaje
    });
  }

  return (
    <div className="App">
      <h2>{isConnected ? 'CONECTADO' : 'NO CONECTADO'}</h2>
      <ul>
        {mensajes.map(mensaje => (
          <li key={mensaje.id}>{  mensaje.usuario}: {mensaje.mensaje}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={e => setNuevoMensaje(e.target.value)}
      />
      <button onClick={enviarMensaje}>Enviar</button>
    </div>
  );
}

export default App;