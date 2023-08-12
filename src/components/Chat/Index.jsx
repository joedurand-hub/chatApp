import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import File from "../../components/File/Index"
import ChatHeader from "../../components/ChatHeader/Index"

const Index = () => {
  const [user, setUser] = useState("user")
  const [historialDelChat, setHistorialDelChat] = useState([])
  const [message, setMessage] = useState("")
  // const [typing, setTyping] = useState(false)
  const [socket, setSocket] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("enviar-mensaje", message)
    setHistorialDelChat((previousState) => [...previousState, { messages: message, reciboMensaje: false }])
    setMessage("")
    // setTyping(false)
  }
  const handleInputChage = (e) => {
    setMessage(e.target.value)
    // socket.emit("escribiendo")
  }

  useEffect(() => {
    setSocket(io("http://localhost:8080"))
    const data = JSON.parse(window.localStorage.getItem("authtoken"))
    setUser(data)
  }, [])

  useEffect(() => {
    if (!socket) return
    socket.on('mensaje-desde-server', (data) => {
      setHistorialDelChat((previousState) => [...previousState, { messages: data, reciboMensaje: true }])
    })
        // socket.on('escribiendo-desde-server', () => {
        //   setTyping(true)
        // })
  }, [socket])





  return (
    <section class="flex-col max-w-full p-absolute">
      <div class="lg:col-span-2 lg:block mb-7">
        <ChatHeader typeOfChat={"| Chat general"} userName={user.name || "Joe"} />
        <div class="w-full">
          <div class="relative p-6 overflow-y-auto lg:h-[40rem]">
            <ul class="mt-14 space-y-2">
              {historialDelChat?.map((obj, index) => {
                return (
                    <div key={index} style={obj.reciboMensaje ? {
                      textAlign: "left",
                    background: "#909090",
                    color: "white",
                    fontSize: "16px",
                    padding: "0.7rem 0.7rem 0.4rem 0.7rem",
                    borderRadius: "1.5rem 1.5rem 1.5rem 0",
                    } : {
                      textAlign: "right",
                    background: "#636b8a",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "16px",
                    padding: "0.7rem 0.7rem 0.4rem 0.7rem",
                    borderRadius: "1.5rem 1.5rem 1.5rem 0",
                    }}>
                      <span >{obj.messages}</span>
                    </div>
                )
              })}
              <li class="flex justify-start">
                <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <img class="object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD6p8ChyTWsTp3DAjRPKJt4ngO54yEmIJvw&usqp=CAU" />
                </div>
              </li>
            </ul>
          </div>

          <div class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
            {/* {typing && <p>Escribiendo...</p>} */}
            {user.role === "admin" ? (
              <form onSubmit={handleSubmit} class="flex flex-row items-center justify-between w-full p-3 lg:flex-row">
                <File />

                <input
                  value={message}
                  onChange={(e) => handleInputChage(e)}
                  type="text"
                  placeholder="Ingrese un mensaje"
                  className="block w-full px-4 py-2 mx-3 bg-white border border-gray-300 rounded-full outline-none focus:ring focus:ring-gray-200 focus:border-gray-400"
                  name="message"
                />

                <button type="submit">
                  <svg class={message.length > 0 ? "w-5 h-5 text-blue-500 origin-center transform rotate-90" : "w-5 h-5 text-gray-500 origin-center transform rotate-90"} xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            ) : (
              <div class="flex flex-row items-center justify-center w-full p-3 lg:flex-row">
                <p class="text-xs">Solo los administradores pueden enviar mensajes</p>
              </div>
            )}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Index