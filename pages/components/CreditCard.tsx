import { ConnectButton } from "@rainbow-me/rainbowkit";

const CreditCard = () => {
  return (
    <div className="digitalWallet">
      <div className="w-full lg:max-w-full px-4 py-32 lg:grid lg:h-screen place-items-center ">
        {/* //card */}
        <div className="inline-flex items-center w-full justify-between block max-w-sm p-6 bg-gray-200 border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="grid grid-cols-1 gap-4">
            <div className="font-extrabold text-2xl">DEPOSIT</div>
            <div className="">BALANCE:</div>
            <div className="underline inline-flex items-center w-full justify-between">
              <div>USDC </div>
              <div>1</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <a className="style5">FIAT</a>
            <a className="style4">ONCHAIN DEPOSIT</a>
            <a className="style4">PAYPAL</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
