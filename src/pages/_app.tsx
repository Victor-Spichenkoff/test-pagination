import '@/styles/globals.css'
import '@/styles/components.css'
import '@/styles/extraComponents.css'
import '@/styles/pageNavigation.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head >
    <title>Test Pagination</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
