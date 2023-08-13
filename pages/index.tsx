import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CreditCard from './components/CreditCard'
import FrontPage from './components/FrontPage'
//Components
import Navigation from './components/Navigation'
import StepOne from './components/steps/step-one'
import StepThree from './components/steps/step-three'
import StepTwo from './components/steps/step-two'
import StepFour from './components/steps/step-four'

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
    </div>
  )
}

export default Home
