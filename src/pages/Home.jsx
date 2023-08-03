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
    async function fetchData() {
      await actionLogin(dispatch)(loading, data, error); // cargo el state de arriba
    }
    fetchData()
  }, [data])

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
          class="mt-1 flex w-full items-center justify-center lg:justify-between">
          <a href="conversaciones" class="mr-5 ">Conversaciones</a>
          <a href="chat" class="mr-5 ">Chat general</a>
          <a href="chat-privado" class="mr-5 ">Chat privado</a>
          <a href="admin" class="mr-5 ">Admin</a>
        </div>
        <div
          class="g-6 flex h-full flex-wrap items-center flex-col justify-center lg:justify-between">
          <div
            class=" flex items-center justify-center shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
              alt="Sample image" />
          </div>

          <h1>Iniciar sesión</h1>
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit}>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <div class="relative mb-3" data-te-input-wrapper-init>
                  <input
                    name="email"
                    onChange={(e) => handleInputChange(e)}
                    value={inputValue.email}
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Email" />
                  <label
                    htmlFor="exampleFormControlInput1"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Email
                  </label>
                </div>
              </div>

              <div class="relative mb-3" data-te-input-wrapper-init>
                <input
                  name="password"
                  onChange={handleInputChange}
                  value={inputValue.password}
                  type="password"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputPassword"
                  placeholder="Contraseña" />
                <label
                  htmlFor="exampleFormControlInputPassword"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Contraseña
                </label>
              </div>


              <div class="text-center lg:text-left">
                <a href="#" class="mr-5 ">¿Olvidaste la contraseña?</a>
                {loading ? (
                  <div>
                    Cargando..
                  </div>
                ) : (
                  
                  <button
                  type="submit"
                  class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Ingresar
                </button>
                    )}

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
