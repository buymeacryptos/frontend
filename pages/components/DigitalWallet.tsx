import { ConnectButton } from "@rainbow-me/rainbowkit";

const DigitalWallet = () => {
  return (
    <div className="digitalWallet">
      <div>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-gray-400 bg-clip-text text-3xl font-extrabold sm:text-5xl">
              CONNECT YOUR <span className="color">WEB3 WALLET</span>?
            </h1>
          </div>
          <div className="relative justify top-600">
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
  );
};

export default DigitalWallet;
