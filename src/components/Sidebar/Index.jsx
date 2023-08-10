import { useEffect, useState } from 'react'
import { Sidenav, initTE } from "tw-elements";
import MenuAdmin from "../Menu/Admin"
import MenuUser from "../Menu/User"
import { BASE_URL } from '../../helpers/constants';

const Index = ({ children }) => {
  const [user, setUser] = useState("")
  useEffect(() => {
    initTE({ Sidenav })
    const token = JSON.parse(window.localStorage.getItem("authtoken"))
    setUser(token)
  }, [])

  return (
    <aside class="flex-col h-full max-h-screen w-full m-0">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", borderBottom: "1px solid #e6e6e6" }}>

        <h1 style={{ fontWeight: "bold", paddingTop: "5px" }} class="my-2 mb-4 ml-2 text-lg text-gray-600">Conversaciones</h1>
        <button style={{ position: "relative", right: "10px" }}
          class="rounded bg-primary px-4 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-1"
          aria-controls="#sidenav-1"
          aria-haspopup="true">
          <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
      <div>
        {user.role === "admin" ? (
          <MenuAdmin BASE_URL={BASE_URL}/>
        ) : (
          <MenuUser />
        )}
      </div>
      {children}
    </aside>
  )
}

export default Index