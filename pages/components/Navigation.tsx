import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navigation = () => {
  return (
    <header>
      <div className="flex items-center lg:order-2 absolute right-20 ">
        <button className="block w-full rounded-3xl border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
          Dashboard
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      <h1 className="text-2xl font-bold text-[#828282] absolute left-20">
        BUY ME A CRYPTO
      </h1>
    </header>
  )
}

export default Navigation
