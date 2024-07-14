export default function usePage() {
    const sortItenData = (keys: any[], values: any[]) => {
        //recebe os valores
        const keyArray = []
        const valuesArray = []

        values.forEach((iten, index) => {
            try{
                if(iten.includes('unsplash')) {
                    console.log('imagem: '+ iten)
                    valuesArray.push(iten)
                    keyArray.push(keys[index])
                }
            } catch(e){}
        })

        values.forEach((iten, index) => {
            try{
                if(!iten.includes('unsplash')) {
                    console.log('Não imagem: '+ iten)
                    valuesArray.push(iten)
                    keyArray.push(keys[index])
                }
            } catch(e){
                valuesArray.push(iten)
                keyArray.push(keys[index])
            }
        })
        return { keyArray, valuesArray }
    }


//se der ruim, tacar tudo isso antes do export default
    function capitalize(word: string) {
        return word[0].toUpperCase() + word.slice(1)
    }


    function formatCard(key: string, value:any) {

        try {
            
            if(value.includes('unsplash')) {
                console.log(value)
                return (
                    <div style={{ backgroundImage: `url(${value})` }} className="card-image">
                    </div>
                    // <img src={value} alt="" className="card-image"/>
                )
        } 
        } catch(e){console.log(value)}

        var finalValue = `${value}`

        //objetc
        if(typeof value == 'object') {
            const keys = Object.keys(value)
            const values = Object.values(value)
            console.log(value)

            finalValue = '{ \n'
            keys.forEach((key, i) => {
                if(i == keys.length -1 ) finalValue += `   ${key}: ${values[i]}`
                else finalValue += `   ${key}: ${values[i]},`
            })

            finalValue += '\n}'
        }

        //array
        if(Array.isArray(value)) {
            finalValue = '['
            value.forEach((iten, i) => {
                if(i == value.length -1 ) finalValue += ` ${iten}`
                else finalValue += ` ${iten},`
                 
            })

            finalValue += ' ]'
        }
        return (
            <div className="card-text" key={key}>
                <span>{ capitalize(key) }: </span>
                <span> { finalValue }</span>
            </div>
        )
    }


    function itemToElement(currentObject: object) {
        //recebe um objeto e cria 1 card
        const keys: any = Object.keys(currentObject)
        const values: any = Object.values(currentObject)
        
        const { keyArray, valuesArray } = sortItenData(keys, values)
    
        return ( 
            <div className="card">
                { keys.map((key: string, i) => {
                    
                    return (<>{ formatCard(keyArray[i], valuesArray[i]) }</>)
                })}
            </div>
        )
    }
    

    return { sortItenData, capitalize, formatCard, itemToElement }
}
