import React from 'react'
import Avatar from '../Avatar/Index'

const Index = ({image, userName, status}) => {
    // renderiza imagen, nombre y conexión del usuario
    return (
        <div>
              <a
                class="w-full flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none">
              <Avatar userName={userName ? userName : "Usuario"}/>
                <div class=" pb-2">
                  <div class="flex justify-between">
                    <span class="block ml-2 text-sm font-semibold text-gray-600">{userName ? userName : "Usuario"}</span>
                    <br/> 
                  </div>
                    <span class="block ml-2 text-xs text-gray-600">25 minutes</span>
                </div>
              </a>
        </div>
    )
}

export default Index