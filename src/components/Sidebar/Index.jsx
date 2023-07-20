
const Index = ({children}) => {
  return (
    <aside class="flex-col h-full max-h-screen w-80 m-0">
       <h2 class="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
        {children}
    </aside>
  )
}

export default Index