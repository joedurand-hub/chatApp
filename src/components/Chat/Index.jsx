import React from 'react'

const Index = () => {
  return (
    <section class="flex-col max-w-full p-absolute">
      <div class="lg:col-span-2 lg:block">
        <div class="w-full">
          <div class="relative flex items-center p-3 border-b border-gray-300">
            <img class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
            <span class="block ml-2 font-bold text-gray-600">Emma</span>
            <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 bottom-3"></span>
          </div>
          <div class="relative w-full p-6 overflow-y-auto lg:h-[40rem]">
            <ul class="space-y-2">
              <li class="flex justify-start">
                <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span class="block">Hi</span>
                </div>
              </li>
              <li class="flex justify-start">
                <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                <img class="object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD6p8ChyTWsTp3DAjRPKJt4ngO54yEmIJvw&usqp=CAU"/>
                </div>
              </li>
            </ul>
          </div>

          <div class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
            <div class="flex flex-row items-center justify-between w-full p-3 lg:flex-row">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>

              <input type="text" placeholder="Message"
                class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message" required />
              <button type="submit">
                <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Index