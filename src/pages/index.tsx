import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ObjectCreator from '@/components/ObjectCreator'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div id='pagination-test'>
        <ObjectCreator />
      </div>
    </>
  )
}
