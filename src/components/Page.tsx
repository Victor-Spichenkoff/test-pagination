interface PropsPage {
    pageData: any
    setPageData: any
    currentPage:number
    setCurrentPage: any
    totalPages: number
}

/*recebido: itens: */var itens = [{"nombre":"Adam","idade":75, img: 'https://source.unsplash.com/featured/?animals'},{"nombre":"Amelia","idade":119},{"nombre":"Ximena","idade":106},{"nombre":"Eva","idade":9},{"nombre":"Zé","idade":80}]


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
            <span>{ key }: </span>
            <span> { value }</span>
        </div>
    )
}

function itemToElement(currentObject: object) {
    //recebe um objeto e cria 1 card
    const keys: any = Object.keys(currentObject)

   
    return ( 
        <div className="card">
            { keys.map((key: string) => {
                return (<>{ formatCard(key, currentObject[key]) }</>)
            })}
        </div>
    
    )   
}





const teste = itemToElement(itens[0])




export default function Page(props: PropsPage) {

    // const itens = props.pageData.itens


    return (
        <div className="all-cards">{ teste }</div>
        // props.pageData.pagination.page ? (
        //     <>{ teste }</>
        // ) : 'pre'
    )
}