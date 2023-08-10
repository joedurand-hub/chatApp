import { useEffect, useState } from 'react'
import { Sidenav, initTE } from "tw-elements";
import Register from "../../components/Register/Index"
import Profile from "../../components/Profile/Index"
import Users from "../../components/Users/Index"
import MenuAdmin from "../../components/Menu/Admin"
import { BASE_URL } from '../../helpers/constants';

const Index = () => {
  useEffect(() => {
    initTE({ Sidenav })
    const authtoken = localStorage.getItem('authtoken');
    const token = JSON.parse(authtoken);
    if (!token || token === undefined) return window.location.href = "/"
    if (token && token.role === "user") {
      window.location.href = "/chat";
      return
    }
    if (token && token.role === "admin") return true
  }, [])

  const [isActive, setIsActive] = useState('register')
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "40px" }}>
        <h1 style={{ fontWeight: "bold", marginLeft: "25%" }}>PANEL ADMIN</h1>
        <button
          class="m-5 rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
      <MenuAdmin BASE_URL={BASE_URL} />
      <section>
        {
          isActive === "register" && (
            <div>
              <Register />
            </div>
          )}
        {
          isActive === "profile" && (
            <div>
              <Profile />
            </div>
          )}
        {isActive === "allUsers" && (
          <div>
            <Users />
          </div>
        )}
      </section>
    </div>

  )
}

export default Index