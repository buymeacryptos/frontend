const Dashboard = () => {
  return (
    <div className="dashboard min-h-screen flex flex-col h-screen">
      <header className="relative top-0">
        <div className="flex items-center lg:order-2 absolute top-20 right-20 ">
          YOUR ASSETS
        </div>

        <a
          href="/dashboard"
          className="text-2xl font-bold text-black absolute top-20 left-20">
          Dashboard
        </a>
      </header>

      <main className="p-6 sm:p-10 space-y-6 flex-1 flex flex-row overflow-y-hidden">
        <div className="h-screen grid grid-cols-6 grid-rows-3 items-center justify-center">
          <div className="col-span-3 p-8 items-center p-8 bg-white shadow rounded-3xl">
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

          <div className="p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">YOUR CARD</span>
            </div>
          </div>

          <div className="p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">YOUR CARD</span>
            </div>
          </div>

          <div className="col-span-3 p-8 bg-white shadow rounded-3xl">
            <div>
              <span className="block text-2xl font-bold">Status</span>
            </div>
          </div>
        </div>
      </main>

      <footer>hsadhfajsdf;as</footer>
    </div>
  );
};

export default Dashboard;
