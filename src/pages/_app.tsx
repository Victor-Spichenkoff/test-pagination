import '@/styles/globals.css'
import '@/styles/components.css'
import '@/styles/extraComponents.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
