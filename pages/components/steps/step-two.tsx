import { ConnectButton } from '@rainbow-me/rainbowkit'
import transakSDK from '@transak/transak-sdk'

const settings = {
  apiKey: 'cf5868eb-a8bb-45c8-a2db-4309e5f8b412', // Your API Key
  environment: 'STAGING', // STAGING/PRODUCTION
  defaultCryptoCurrency: 'ETH',
  themeColor: '000000', // App theme color
  hostURL: 'window.location.origin',
  widgetHeight: '500px',
  widgetWidth: '500px',
}

export function openTransak() {
  const transak = new transakSDK(settings)

  transak.init()

  // To get all the events
  transak.on(transak.ALL_EVENTS, (data: any) => {
    console.log(data)
  })

  // This will trigger when the user closed the widget
  transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData: any) => {
    console.log(eventData)
    transak.close()
  })

  // This will trigger when the user marks payment is made.
  transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData: any) => {
    console.log(orderData)
    window.alert('Payment Success')
    transak.close()
  })
}

const StepTwo = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="flex mb-10 text-bold items-center justify-between">
        <p className="text-6xl">Step 2</p>
        <p>
          Get your digital
          <br /> wallet
        </p>
      </div>
      <div className="w-full px-4 place-items-center ">
        {/* //card */}
        <div className="text-white inline-flex items-center min-w-full justify-between block max-w-sm px-20 py-10 bg-steps border border-gray-100 rounded-3xl shadow">
          <div className="grid grid-cols-1 gap-4">
            <div className="font-extrabold text-5xl">DEPOSIT USDC</div>
            <div className="">BALANCE:</div>
            <div className="underline inline-flex items-center w-full justify-between">
              <div>USDC </div>
              <div>1</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button onClick={openTransak} className="style5 text-start">
              FIAT
            </button>
            <button className="style4 text-start">ONCHAIN DEPOSIT</button>
            <button className="style4 text-start">PAYPAL</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
