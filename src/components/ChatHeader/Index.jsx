import Avatar from "../Avatar/Index"

const Index = () => {
  return (
    <div class="w-full border-b border-gray-300">
      <a href="/conversaciones" style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "10px" }}>

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1.5em"
          width="1.5em"
        >
          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
        </svg>
        <div class="relative flex items-center p-3">
          <Avatar userName="Joe"/>
          <span class="block ml-2 font-bold text-gray-600">Emma</span>
          <span class="absolute w-4 h-4 bg-green-600 rounded-full left-10 bottom-3">
          </span>
        </div>
      </a>
    </div>

  )
}

export default Index