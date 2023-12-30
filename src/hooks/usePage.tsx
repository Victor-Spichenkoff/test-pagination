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

    return { sortItenData }
}