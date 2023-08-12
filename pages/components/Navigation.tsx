import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navigation = () => {
  return (
    <header>
      <div className="absolute top-10 right-20">
        <ConnectButton
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          chainStatus="icon"
          label="Connect"
        />
      </div>

      <h1 className="text-2xl font-bold text-[#828282] absolute top-10 left-20">
        BUY ME A CRYPTO
      </h1>
    </header>
  );
};

export default Navigation;
