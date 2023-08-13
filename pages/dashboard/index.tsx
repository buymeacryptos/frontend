import Image from 'next/image'
import dashboard from '../../public/dashboard.png'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between rounded-3xl">
        <a href="/dashboard" className="text-xl font-bold p-4 md:py-8">
          DASHBOARD
        </a>

        <div className="">YOUR ASSETS</div>
      </header>

      {/* <main className="p-6 sm:p-10 space-y-6 flex-1 flex flex-row overflow-y-hidden">
        <div className="h-screen grid grid-cols-6 grid-rows-3 items-center justify-center space-x-10">
          <div className="justify-center col-span-3 p-8 items-center p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">Balance</span>
              <span className="block text-gray-500 inline-flex items-center w-full justify-between space-x-4">
                <div>Currency</div>

                <div>Current Price</div>
                <div>Change</div>
              </span>
            </div>
          </div>

          <div className="items-center p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold flex items-center justify-center">
                TOTAL ACTIVITY
              </span>
            </div>
          </div>

          <div className="p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">TOTAL ACTIVITY</span>
            </div>
          </div>

          <div className="col-span-3 p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">YOUR STRATEGY</span>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between p-8 bg-white shadow rounded-3xl ">
            <div className="flex items-center">
              <span className="block text-2xl font-bold">YOUR CARD</span>
              <button className="rounded-3xl border-blue-600 bg-[#00F900] px-4 py-2 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                ADD FUNDS
              </button>
            </div>
          </div>

          <div className="col-span-3 p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">Status</span>
            </div>
          </div>
        </div>
      </main> */}
      <Image className="w-full p-8" src={dashboard} alt="" />
      <footer className="bg-white rounded-3xl shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="/" className="hover:underline">
              Buy Me A Crypto™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard
