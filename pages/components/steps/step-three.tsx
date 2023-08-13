import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import op from '../../../public/op.png'
import arb from '../../../public/arb.png'
import lido from '../../../public/lido.png'
import link  from '../../../public/link.png'
import snx from '../../../public/snx.png'
import usdc from '../../../public/usdc.png'
import wbtc from '../../../public/wbtc.png'
import weth from '../../../public/weth.png'
import wld from '../../../public/wld.png'
import wmatic from '../../../public/wmatic.png'

function StepThree() {
  const [tokens, setTokens] = useState([
    {"name":"Optimism","address":"0x","image":op,"key":"op"},
    {"name":"Arbitrum","address":"0x","image":arb,"key":"arb"},
    {"name":"Lido Dao","address":"0x","image":lido,"key":"lido"},
    {"name":"Wrapped Matic","address":"0x","image":wmatic,"key":"wmatic"},
    {"name":"USD COIN","address":"0x","image":usdc,"key":"usdc"},
    {"name":"Chainlink","address":"0x","image":link,"key":"link"},
    {"name":"WETH","address":"0x","image":weth,"key":"weth"},
    {"name":"Wrapped Bitcoin","address":"0x","image":wbtc,"key":"wbtc"},
    {"name":"Synthetix Network","address":"0x","image":snx,"key":"snx"},
    {"name":"WORLDCOIN","address":"0x","image":wld,"key":"wld"}])
  const [choosed, setChoosed] = useState(null)
  return (
    <div className="w-11/12 mt-20 mx-auto">
      <div className="flex mb-10 text-bold items-center justify-between">
        <p className="text-6xl">Step 3</p>
        <p>
          Get your digital
          <br /> wallet
        </p>
      </div>
      <div>
        <div className="mx-auto bg-steps px-20 py-10 rounded-2xl">
          <div className="">
            <div className="font-extrabold text-white mb-10 text-5xl">Choose Token</div>
            <div className='grid grid-cols-5 gap-24 items-center justify-between'>
              {tokens?.map(post => 
                <button
                  onClick={() => setChoosed(post.key)}
                  style={post.key === choosed ? {borderWidth: '8px'}:{}}
                  className='bg-slate-200 mx-auto border-green-400 transition w-36   h-36 bg flex flex-col items-center justify-center rounded-2xl hover:border-8'>
                  <Image src={post.image} alt="" width={60} height={60}/>
                  <p className='text-2xl'>{post.name}</p>
                </button>)}
                
            </div>
            {choosed && 
                <div className='w-full mt-10 text-white'>
                  <div className='flex justify-between w-full '>
                    <h2 className='text-5xl'>ask a crypto assistant</h2>
                    <div>
                      <div>
                        Who is Satoshi?
                      </div>
                      <div>
                        Who is Satoshi?
                      </div>
                      <div>
                        Who is Satoshi?
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-44 rounded-lg bg-gray-200 relative'>
                    <input className="w-4/5 translate-x-2/4 bg-gray-600 text-white px-5 py-2	rounded-lg	right-2/4	absolute bottom-2 left-50" />
                  </div>
                </div>
                }
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree
