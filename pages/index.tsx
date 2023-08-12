import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

//Components
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import DigitalWallet from "./components/DigitalWallet";

const Home: NextPage = () => {
  return (
    <div>
      <title> Buy Me a Crypto</title>
      <Navigation />
      <FrontPage />
      <DigitalWallet />
    </div>
  );
};

export default Home;
