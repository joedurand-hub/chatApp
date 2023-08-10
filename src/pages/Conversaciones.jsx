import { useEffect, useContext, useRef } from "react"
import { ChatDataContext } from "../context"
import Container from "../components/Container/Index"
import ConversationList from "../components/ConversationList/Index"
import Sidebar from "../components/Sidebar/Index"
import Chat from "../components/Chat/Index"
import ChatHeader from "../components/ChatHeader/Index"
import MessageList from "../components/MessageList/Index"
import SendMessage from "../components/SendMessage/SendMessage"
import Conversation from "../components/Conversation/Index"
import { io } from "socket.io-client";

const Conversaciones = () => {
  const {state} = useContext(ChatDataContext)
  console.log(state.user)
  const socket = useRef();

  useEffect(() => {

    // Conecta con el servidor de socket.io
    socket.current = io('http://localhost:8080');

    // // Maneja los eventos del socket
    // socket.current.on('conectado', (conexion) => {
    //   console.log('Conectado al servidor de socket.io', conexion);
    // });

    // socket.current.emit('mensaje', "hola")

    // Cierra la conexión al desmontar el componente
    // return () => {
    //   socket.current.disconnect();
    // };
  }, []);

  return (
    <Container>

      <Sidebar>
        <ConversationList>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </ConversationList>
      </Sidebar>
      
    </Container>
  )
}

export default Conversaciones