import { useEffect } from 'react'
import { API_BASE_URL, API_GET_USERS } from '../../api'
import useHttp from '../../hooks/useHttp'

const Users = () => {
    const { loading, data, error, sendRequest } = useHttp()
    console.log(data)
    useEffect(() => {
        const authtoken = localStorage.getItem("authtoken")
        async function getData() {
            await sendRequest(`${API_BASE_URL}${API_GET_USERS}`, 'GET', null, authtoken)
        }
        getData()
    }, [])

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "85%" }}>
                <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                    >
                </div>
            </div>
        )
    }

    if (error) {

        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                    No se ha podido cargar los usuarios
                </div>
            </div>
        )
    }

    return (
        <div>
            <h5>{data?.email}</h5>
            <h5>{data?.createdAt}</h5>
        </div>
    )
}

export default Users