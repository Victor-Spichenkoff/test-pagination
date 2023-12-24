import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ObjectCreator from '@/components/ObjectCreator'
import Page from '@/components/Page'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pageData, setPageData] = useState({ pagination: {}, itens: [{}] })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(5)

  return (
    <>
      <Header />
      <div id='pagination-test'>
        <ObjectCreator setPageData={setPageData} setTotalPages={setTotalPages} 
          curentPage={currentPage}
        />
        <Page 
          setPageData={setPageData} 
          pageData={pageData} 
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </>
  )
}
