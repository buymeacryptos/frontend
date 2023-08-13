import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import meme from '../public/meme.png'
import styles from '../styles/Home.module.css'
import CreditCard from './components/CreditCard'
import FrontPage from './components/FrontPage'
//Components
import Navigation from './components/Navigation'
import StepFour from './components/steps/step-four'
import StepOne from './components/steps/step-one'
import StepThree from './components/steps/step-three'
import StepTwo from './components/steps/step-two'

const Home: NextPage = () => {
  return (
    <div>
      <title> Buy Me a Crypto</title>
      <Navigation />
      <FrontPage />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <CreditCard />
      <Image src={meme} alt="" width={0} height={0} />
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

export default Home
