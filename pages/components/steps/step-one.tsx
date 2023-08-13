import { ConnectButton } from '@rainbow-me/rainbowkit'

const StepOne = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex mb-10 text-bold items-center justify-between">
        <p className="text-6xl">Step 1</p>
        <p>
          Get your digital
          <br /> wallet
        </p>
      </div>
      <div>
        <div className="mx-auto bg-slate-200 p-4 py-10 rounded-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-black bg-clip-text text-3xl font-bold sm:text-5xl">
              Connect your web3 wallet
            </h1>
            <ConnectButton
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
              chainStatus="icon"
              label="Connect"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
