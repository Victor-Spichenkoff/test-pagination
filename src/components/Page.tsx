import usePage from '@/hooks/usePage'
import PageNavigation from './PageNavigation'

interface PropsPage {
    pageData: any
    setPageData: any
    currentPage:number
    setCurrentPage: any
    totalPages: number
}

/*recebido: itens: */var itens = [{"nombre":"Adam","idade":75, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Amelia","idade":119, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Ximena","idade":106, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Eva","idade":9, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Zé","idade":80, img: 'https://source.unsplash.com/featured/?animals'}]

const { capitalize, formatCard, itemToElement } = usePage()







export default function Page(props: PropsPage) {

    function createAllCards() {
        return (
            <>{
                props.pageData.itens.map(iten => {
                    return (<>{ itemToElement(iten) }</>)
                }) 
            }</>
        )
    }


    const handlePageChange = (pageNumber) => {
        props.setCurrentPage(pageNumber)
      };

    return (
        <>
        <div className='demonstration'>
            <h2>Demonstration</h2>

        <> { Object.keys(props.pageData.itens[0]).length !== 0 ? (
            <><div className="all-cards">{ createAllCards() }</div>
            <PageNavigation onPageChange={handlePageChange} pageCount={props.totalPages}/> </>
        ) : (
            <div className='no-data'>No data</div>
        )
        } </>



        </div>
            <span id='base'>a</span>
        </>

    )
}