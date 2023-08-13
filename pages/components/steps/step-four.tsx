import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import arb from '../../../public/arb.png'
import lido from '../../../public/lido.png'
import link from '../../../public/link.png'
import op from '../../../public/op.png'
import snx from '../../../public/snx.png'
import usdc from '../../../public/usdc.png'
import wbtc from '../../../public/wbtc.png'
import weth from '../../../public/weth.png'
import wld from '../../../public/wld.png'
import wmatic from '../../../public/wmatic.png'

function StepFour() {
  const [tokens, setTokens] = useState([
    { name: 'Optimism', address: '0x', image: op, key: 'op' },
    { name: 'Arbitrum', address: '0x', image: arb, key: 'arb' },
    { name: 'Lido Dao', address: '0x', image: lido, key: 'lido' },
    { name: 'Wrapped Matic', address: '0x', image: wmatic, key: 'wmatic' },
    { name: 'USD COIN', address: '0x', image: usdc, key: 'usdc' },
    { name: 'Chainlink', address: '0x', image: link, key: 'link' },
    { name: 'WETH', address: '0x', image: weth, key: 'weth' },
    { name: 'Wrapped Bitcoin', address: '0x', image: wbtc, key: 'wbtc' },
    { name: 'Synthetix Network', address: '0x', image: snx, key: 'snx' },
    { name: 'WORLDCOIN', address: '0x', image: wld, key: 'wld' },
  ])
  const [strategy, setStratydy] = useState([
    {
      name: 'Low Risk',
      address: '0x',
      image: [wbtc, weth],
      key: 'low',
    },
    {
      name: 'Middle Risk',
      address: '0x',
      image: [lido, op, arb],
      key: 'middle',
    },
    {
      name: 'High Risk',
      address: '0x',
      image: [wld, snx, link],
      key: 'heig',
    },
  ])
  const [choosed, setChoosed] = useState<any>([])
  const addChoose = (key: any) => {
    setChooseStrategyString('')
    const check = choosed.find((post: any) => key.key === post.key)
    if (check) {
      setChoosed((prev: any) =>
        prev.filter((post: any) => post.key !== key.key)
      )
      return
    }
    setChoosed((prev: any) => [key, ...prev])
  }
  const getActive = (key: string) => {
    const check = choosed.find((post: any) => key === post.key)
    if (check) return true
  }

  const [chooseStrategyString, setChooseStrategyString] = useState('')
  const chooseStrategy = (key: any) => {
    setChooseStrategyString(key)
    switch (key) {
      case 'low':
        setChoosed([
          { name: 'Wrapped Bitcoin', address: '0x', image: wbtc, key: 'wbtc' },
          { name: 'WETH', address: '0x', image: weth, key: 'weth' },
        ])
        break
      case 'middle':
        setChoosed([
          { name: 'Lido Dao', address: '0x', image: lido, key: 'lido' },
          { name: 'Optimism', address: '0x', image: op, key: 'op' },
          { name: 'Arbitrum', address: '0x', image: arb, key: 'arb' },
        ])
        break
      case 'heig':
        setChoosed([
          { name: 'Synthetix Network', address: '0x', image: snx, key: 'snx' },
          { name: 'WORLDCOIN', address: '0x', image: wld, key: 'wld' },
          { name: 'Chainlink', address: '0x', image: link, key: 'link' },
        ])
        break
      default:
        return
    }
  }
  return (
    <div className="w-11/12 mt-20 mx-auto">
      <div className="flex mb-10 text-bold items-center justify-between">
        <p className="text-6xl">Step 4</p>
        <p>
          Get your digital
          <br /> wallet
        </p>
      </div>
      <div>
        <div className="mx-auto bg-steps px-20 py-10 rounded-2xl">
          <div className="">
            <div className="font-extrabold text-white mb-10 text-5xl">
              Choose Token
            </div>
            <div className="grid grid-cols-5 gap-24 items-center justify-between">
              {tokens?.map((post) => (
                <button
                  onClick={() => addChoose(post)}
                  style={getActive(post.key) ? { borderWidth: '8px' } : {}}
                  className="bg-slate-200 mx-auto border-green-400 transition w-36   h-36 bg flex flex-col items-center justify-center rounded-2xl hover:border-8"
                >
                  <Image src={post.image} alt="" width={60} height={60} />
                  <p className="text-2xl">{post.name}</p>
                </button>
              ))}
            </div>
            <p className="font-extrabold text-white mb-10 mt-10 text-5xl">
              Choose your DCA bundle strategy
            </p>
            <div className="flex">
              {strategy?.map((post) => (
                <button
                  style={
                    chooseStrategyString === post.key
                      ? { borderWidth: '8px' }
                      : {}
                  }
                  onClick={() => chooseStrategy(post.key)}
                  className="bg-slate-200 gap-4 mx-auto border-green-400 transition w-1/4   h-36 bg flex flex-col items-center justify-center rounded-2xl hover:border-8"
                >
                  <p className="flex">
                    {post.image?.map((img) => (
                      <Image src={img} alt="" width={40} height={40} />
                    ))}
                  </p>
                  <p className="text-3xl">{post.name}</p>
                </button>
              ))}
            </div>
            <p className="font-extrabold text-white mb-10 mt-10 text-5xl">
              CHECK AND APPROVE INVESTMENT
            </p>
            <div className="flex"></div>
            <div className="text-white flex items-cetner justify-between">
              <div className="">
                <p className="text-xl mb-3">Invesment sum</p>
                <input
                  className="bg-gray-200 text-black px-5 rounded-2xl py-2"
                  type="text"
                  placeholder="$5000"
                />
              </div>
              <div className="">
                <p className="text-xl mb-3">one-time paymant</p>
                <input
                  className="bg-gray-200 text-black px-5 rounded-2xl py-2"
                  type="text"
                  placeholder="$5000"
                />
              </div>
              <div className="">
                <p className="text-xl mb-3">Tokens</p>
                <div className="flex">
                  {choosed?.map((post: any) => (
                    <Image src={post.image} alt="" width={30} height={30} />
                  ))}
                </div>
              </div>

              <div className="">
                <p className="text-xl mb-3">Buy crypto every:</p>
                <select className="bg-gray-200 text-black px-5 rounded-2xl py-2">
                  <option>hour</option>
                  <option>day</option>
                  <option>week</option>
                  <option>month</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  <button className="w-full bg-white text-black px-5 rounded-2xl py-2">
                    Refuel
                  </button>
                </p>
                <p>
                  <button className="bg-green-500 text-black px-5 rounded-2xl py-2">
                    Start Invesment
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour
