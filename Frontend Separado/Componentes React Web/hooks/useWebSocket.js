// hooks/useWebSocket.js
import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

export function useWebSocket(url) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(url);

    socketRef.current.on('connect', () => setIsConnected(true));
    socketRef.current.on('disconnect', () => setIsConnected(false));
    socketRef.current.on('message', (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => socketRef.current.disconnect();
  }, [url]);

  const sendMessage = (event, data) => {
    socketRef.current?.emit(event, data);
  };

  return { messages, isConnected, sendMessage };
}