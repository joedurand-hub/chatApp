import Container from "../components/Container/Index"
import ConversationList from "../components/ConversationList/Index"
import Sidebar from "../components/Sidebar/Index"
import Chat from "../components/Chat/Index"
import ChatHeader from "../components/ChatHeader/Index"
import MessageList from "../components/MessageList/Index"
import SendMessage from "../components/SendMessage/SendMessage"
import Conversation from "../components/Conversation/Index"

const ChatGeneral = () => {
  return (
    <Container>
      
      <Sidebar>
        <ConversationList>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          </ConversationList>
      </Sidebar>
      <Chat>

        <ChatHeader />
        <MessageList />
        <SendMessage />

      </Chat>
    </Container>
  )
}

export default ChatGeneral