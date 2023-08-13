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

function StepThree() {
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
  const FAQ = {
    op: 'Optimism (OP) is a layer-two blockchain on top of Ethereum. Optimism benefits from the security of the Ethereum mainnet and helps scale the Ethereum ecosystem by using optimistic rollups. That means transactions are trustlessly recorded on Optimism but ultimately secured on Ethereum.',
    wbtc: 'WBTC is an ERC-20 token on the Ethereum blockchain that is pegged to Bitcoin (BTC). WBTC is backed one-to-one with Bitcoin. Before WBTC, the only way to use Bitcoin in a financial transaction was through centralized entities, like centralized exchanges (CEXs).',
    weth: 'ETH is the original token created on the Ethereum blockchain, while WETH is an ERC-20 token created to make it easier to trade ETH or convert it into other cryptocurrencies.',
    link: 'LINK tokens are used to pay node operators for retrieving data for smart contracts and also for deposits placed by node operators as required by contract creators.',
    usdc: 'USDC is a fully-reserved stablecoin, which is a type of cryptocurrency, or digital asset. Unlike other cryptocurrencies that fluctuate in price, USDC is designed to maintain price equivalence to the U.S. dollar.',
    wmatic:
      'MATIC tokens are used to govern and secure the Polygon network and pay transaction fees. Polygon uses a modified proof-of-stake consensus mechanism to efficiently operate the platform.',
    lido: 'Lido is a multi-platform staking solution that allows users to access the benefits of staking their crypto without fully locking their tokens. In Proof of Stake (PoS) networks, users can lock their digital assets through staking to participate in the consensus process and continue adding blocks to the blockchain.8',
    arb: 'The Arbitrum token, $ARB, is the native ERC-20 compatible governance token for the Arbitrum blockchain. ',
    wld: 'a token providing utility and giving users a say over the direction of the Worldcoin protocol. WLD is the first token to be globally and freely distributed to people just for being a unique individual.',
    satoshi: 'Satoshi',
    strategy: 'Strategy',
    refuel: 'Refuel',
  }
  const [resp, setResp] = useState('')
  type T = keyof typeof FAQ

  const [choosed, setChoosed] = useState<string>('')
  useEffect(() => {
    setResp(FAQ[choosed as keyof typeof FAQ])
  }, [choosed])
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
            <div className="font-extrabold text-white mb-10 text-5xl">
              Choose Token
            </div>
            <div className="grid grid-cols-5 gap-24 items-center justify-between">
              {tokens?.map((post) => (
                <button
                  onClick={() => setChoosed(post.key)}
                  style={post.key === choosed ? { borderWidth: '8px' } : {}}
                  className="bg-slate-200 mx-auto border-green-400 transition w-36   h-36 bg flex flex-col items-center justify-center rounded-2xl hover:border-8"
                >
                  <Image src={post.image} alt="" width={60} height={60} />
                  <p className="text-2xl">{post.name}</p>
                </button>
              ))}
            </div>
            {choosed && (
              <div className="w-full mt-10 text-white">
                <div className="flex justify-between w-full mb-10">
                  <h2 className="text-5xl">ask a crypto assistant</h2>
                  <div>
                    <div className="flex items-center gap-5 border-white border-t border-b	">
                      <p className="text-3xl text-bolder">Who is Satoshi?</p>
                      <button
                        onClick={() => setChoosed('satoshi')}
                        className="hover:bg-gray-200 rounded-full	hover:rotate-35 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="43"
                          viewBox="0 0 42 43"
                          fill="none"
                        >
                          <path
                            d="M8.30161 12.8806L32.854 30.1194M32.854 30.1194L29.0683 9.74422M32.854 30.1194L12.4651 33.521"
                            stroke="#00F900"
                            stroke-width="5"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-5 border-white border-t border-b	">
                      <p className="text-3xl text-bolder">
                        How to choose the right strategy for investing?
                      </p>
                      <button
                        onClick={() => setChoosed('strategy')}
                        className="hover:bg-gray-200 rounded-full	hover:rotate-35 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="43"
                          viewBox="0 0 42 43"
                          fill="none"
                        >
                          <path
                            d="M8.30161 12.8806L32.854 30.1194M32.854 30.1194L29.0683 9.74422M32.854 30.1194L12.4651 33.521"
                            stroke="#00F900"
                            stroke-width="5"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-5 border-white border-t border-b	">
                      <p className="text-3xl text-bolder">
                        What is refuel in crypto?
                      </p>
                      <button
                        onClick={() => setChoosed('refuel')}
                        className="hover:bg-gray-200 rounded-full	hover:rotate-35 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="43"
                          viewBox="0 0 42 43"
                          fill="none"
                        >
                          <path
                            d="M8.30161 12.8806L32.854 30.1194M32.854 30.1194L29.0683 9.74422M32.854 30.1194L12.4651 33.521"
                            stroke="#00F900"
                            stroke-width="5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full p-5 h-80 rounded-lg bg-gray-200 relative">
                  <p className="text-black">{resp}</p>
                  <input className="w-4/5 translate-x-2/4 bg-gray-600 text-white px-5 py-5	rounded-lg	right-2/4	absolute bottom-2 left-50" />
                  <button className="bg-gray-200 rounded-full	rotate-35 transition absolute bottom-5 right-36">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="black"
                    >
                      <path
                        d="M8.30161 12.8806L32.854 30.1194M32.854 30.1194L29.0683 9.74422M32.854 30.1194L12.4651 33.521"
                        stroke="#000000"
                        stroke-width="5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree
