import { useEffect, useContext, useState } from "react"
import { ChatDataContext } from "../../context/index";
import { actionLogin } from '../../actions/index';
import { Input, Ripple, initTE } from "tw-elements";
import { API_BASE_URL, API_REGISTER } from "../../api/index"
import useHttp from "../../hooks/useHttp";

const Index = () => {
    useEffect(() => {
        initTE({ Input, Ripple })
    }, [])

    const { loading, data, error, sendRequest } = useHttp()
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    console.log(loading)
    console.log(data)
    console.log(error)
    const { state, dispatch } = useContext(ChatDataContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await sendRequest(`${API_BASE_URL}${API_REGISTER}`, 'POST', inputValue)
        setInputValue({ email: '', password: '' })
    };

    useEffect(() => {
        async function fetchData() {
            await actionLogin(dispatch)(loading, data, error); // cargo el state de arriba
            localStorage.setItem('authtoken', JSON.stringify(data.token));
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
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Logo
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registrar nuevo usuario
                        </h1>
                        <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => handleInputChange(e)}
                                    value={inputValue.email}
                                    id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password"
                                    name="password"
                                    onChange={(e) => handleInputChange(e)}
                                    value={inputValue.password}
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            {loading ? (
                                <div
                                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span
                                    >
                                </div>
                            ) : (
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
                            )}
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Algo no funciona? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Contactar</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index