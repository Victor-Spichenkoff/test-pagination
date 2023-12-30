import usePage from '@/hooks/usePage'

interface PropsPage {
    pageData: any
    setPageData: any
    currentPage:number
    setCurrentPage: any
    totalPages: number
}

/*recebido: itens: */var itens = [{"nombre":"Adam","idade":75, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Amelia","idade":119, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Ximena","idade":106, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Eva","idade":9, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Zé","idade":80, img: 'https://source.unsplash.com/featured/?animals'}]


function capitalize(word: string) {
    return word[0].toUpperCase() + word.slice(1)
}

function formatCard(key: string, value:any) {

    try {
        
        if(value.includes('unsplash')) {
            console.log(value)
            return (
                <div style={{ backgroundImage: `url('${value}')` }} className="card-image">
                </div>
                // <img src={value} alt="" className="card-image"/>
            )
    } 
    } catch(e){console.log(value)}
    return (
        <div className="card-text" key={key}>
            <span>{ capitalize(key) }: </span>
            <span> { value }</span>
        </div>
    )
}

function itemToElement(currentObject: object) {
    //recebe um objeto e cria 1 card
    const keys: any = Object.keys(currentObject)
    const values: any = Object.values(currentObject)
    
    const { sortItenData } = usePage()
    const { keyArray, valuesArray } = sortItenData(keys, values)

    return ( 
        <div className="card">
            { keys.map((key: string, i) => {
                
                return (<>{ formatCard(keyArray[i], valuesArray[i]) }</>)
            })}
        </div>
    )
}



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

    console.log(props.pageData.itens, !!props.pageData.itens[0])

    return (
        <> { props.pageData.itens ? (
            <div className="all-cards">{ createAllCards() }</div>
        ) : (
            <div>No data</div>
        )
        } </>

    )
}