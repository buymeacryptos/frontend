import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { goerli, optimism, base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import '../styles/globals.css'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    optimism,
    base,
    goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'buymeacrypto',
  projectId: '18c4fce12d591123893a43169198ebbe',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: '#00f900',
          accentColorForeground: 'white',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        modalSize="compact"
        chains={chains}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
