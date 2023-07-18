import React from 'react'
import Conversation from "../Conversation/Index.jsx"

const Index = ({children, conversations}) => {
    // recibe un array de conversaciones
    // por cada objeto de conversación renderiza un componente Conversation
    
    return (
        <div class="h-screen max-h-screen">
            {children}
            {/* {conversations?.map(() => {
                return (
                    <Conversation />
                )
            })} */}
        </div>
    )
}

export default Index