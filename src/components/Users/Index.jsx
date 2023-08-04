import { useEffect, useContext, useState } from "react"
import { ChatDataContext } from "../../context/index";
import { actionLogin } from '../../actions/index';
import { Input, Ripple, initTE } from "tw-elements";
import { API_BASE_URL, API_GET_USERS } from "../../api/index"
import useHttp from "../../hooks/useHttp";

const Index = () => {
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
        await sendRequest(`${API_BASE_URL}${API_GET_USERS}`, 'GET', inputValue)
        setInputValue({ email: '', password: '' })
    };

    useEffect(() => {
        async function fetchData() {
            await actionLogin(dispatch)(loading, data, error); // cargo el state de arriba
            localStorage.setItem('authtoken', JSON.stringify(data));
        }
        fetchData()
    }, [data])
  return (
    <div>Index</div>
  )
}

export default Index