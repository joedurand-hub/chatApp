import { useEffect, useContext, useState } from "react";
import { ChatDataContext } from "../context/index";
import { actionLogin } from '../actions/index';
import { Input, initTE } from "tw-elements";
import { API_BASE_URL, API_LOGIN } from "../api/index"
import useHttp from "../hooks/useHttp"

function Home() {
  useEffect(() => {
    initTE({ Input })
  }, [])
  const { loading, data, error, sendRequest } = useHttp()
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })
  const { state, dispatch } = useContext(ChatDataContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendRequest(`${API_BASE_URL}${API_LOGIN}`, 'POST', inputValue)
    setInputValue({ email: '', password: '' })
  };

  useEffect(() => {
    if (!data) return
    if (data === "Email or password is wrong") return
    if (data !== "Email or password is wrong" && data !== "") {
      async function fetchData() {
        await actionLogin(dispatch)(loading, data, error);
        localStorage.setItem('authtoken', JSON.stringify(data));
      }
      fetchData()
    }
  }, [data])
  
  if (state.user.data?.role === "admin") {
    window.location.href = "/admin"
  }

  if (state.user.data?.role === "user") {
    window.location.href = "/chat-general"
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <section class="h-screen">
      <div class="mb-10 h-full">
        <div
          class="g-6 flex h-full flex-wrap items-center flex-col justify-center">
          <div
            class=" flex items-center justify-center shrink-1 mb-6 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="LOGO-SNIPER.png"
              class="mb-5 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
              alt="Sample image" />
          </div>

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 style={{ textAlign: "center" }} class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Iniciar sesión
              </h1>
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    autoComplete={true}
                    type="email"
                    name="email"
                    onChange={(e) => handleInputChange(e)}
                    value={inputValue.email}
                    id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                </div>
                <div>
                  <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                  <input type="password"
                    autoComplete={true}
                    name="password"
                    onChange={(e) => handleInputChange(e)}
                    value={inputValue.password}
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div>
                {loading ? (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div
                      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status">
                      <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span
                      >
                    </div>
                  </div>
                ) : (
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ingresar</button>
                )}
                {data && data.token && (
                  <div
                    class="mb-3 inline-flex w-full items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700"
                    role="alert">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    Inicio de sesión exitoso!
                  </div>
                )}
                {data === "Email or password is wrong" && (
                  <div
                    class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
                    role="alert">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    Email o contraseña incorrectos
                  </div>
                )}
                {error && (
                  <div
                    class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
                    role="alert">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    Ups! Se ha producido un error
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
