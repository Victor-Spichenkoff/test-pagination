//criar a função copy

import { useCallback, useState, useEffect } from "react"
import ColoredObject from"./ColoredObject"
import CodeEditor from "./CodeEditor"
import { code_key, baseUrl } from '@/global'
import Mensage from "@/extraComponets/Mensage"
import axios from "axios"

interface PropsObjectCreator {
    setPageData: any
    setTotalPages:any
    curentPage: number
}

const defaultObject =`{
    pagination: {
        page: 1,
        pageSize: 5,
        totalPages: 3
    },
    fields: {
        nombre: 'name'
    }
}`

function getStorageObject(setCode: any) {
    const storageCode = localStorage.getItem(code_key) || defaultObject
    setCode(storageCode)
}

function setStorageObject(code: string) {
    localStorage.setItem(code_key, code)
}




export default function ObjectCreator(props: PropsObjectCreator) {
    const [editMode, setEditMode] = useState(false)
    const [code, setCode] = useState('')
    const [mensage, setMensage] = useState(['', 200, false])

    useEffect(() => getStorageObject(setCode), [])


    // useEffect(()=> {
    //     try {
    //         const evalCode = convertStringToObject()
    //         evalCode.page = props.curentPage
    //         axios.put(`${baseUrl}/pagination`, evalCode)
    //             .then((res)=>{
    //                 props.setPageData(res.data)//propximo array
    //             })
    //             .catch(handleError)
    //     } catch(e) {/*já cuidei disso*/}

    // }, [])

    function handleSuccess(res: any) {
        const msg = res.msg ?? 'Sending...'
        setMensage([msg, res.status, true])

        setTimeout(()=> setMensage([res.msg, res.status, false]), 5000)

        props.setPageData(res.data)
    }
    
    function handleError(res: any) {
        const msg = res.response.data.msg ?? 'Server error'
        setMensage([msg, 400, true])

        setTimeout(()=> setMensage([msg, 400, false]), 5000)
    }

    function convertStringToObject() {
        try {
            const obj = eval('(' + code + ')')
            props.setTotalPages(obj.pagination.totalPages)

            return obj
        } catch(e) {
            handleError({msg: 'Invalalid Object', status:400})
            throw 'Error'
        }
    }

    function getPages(code: string, setPagesItens: any) {
        try {
            const evalCode = convertStringToObject()
            evalCode.pagination.page = props.curentPage

            axios.put(`${baseUrl}/pagination`, evalCode)
                .then(handleSuccess)
                .catch(handleError)
        } catch(e) {/*já cuidei disso*/}
    }


    function changeEditMode(newMode: boolean):any {
        setEditMode(newMode) 
    }

    function changeCode(newValue:any) {
        setCode(newValue)
    }


    async function send() {
        getPages(code, setCode)
        setStorageObject(code)
        
        changeEditMode(false)
    }
    


    // const { curentPage } = props// eslint
    useEffect(()=> {
        try {
            const evalCode = eval('(' + code + ')')
            evalCode.pagination.page = props.curentPage
    
            axios.put(`${baseUrl}/pagination`, evalCode)
                .then(res => props.setPageData(res.data))
        } catch(e) {}
    }, [props.curentPage])

    return (
        <>
                                        {/* Cuidado, usei 'as' */}
            {mensage[2] ?  <Mensage msg={mensage[0] as string} status={mensage[1] as number}></Mensage> : ''}
           


            <div id='object-area'>
            {editMode ? (
                
                    <CodeEditor code={code} onChange={changeCode}/>
                ) : (
                    <ColoredObject code={code}></ColoredObject>
                )
            }
            </div>
            <div id="edit-send">
                <button id='edit' onClick={() => changeEditMode(true)}>Edit</button>
                <button id='send' onClick={send}>Send</button>
            </div>
        </>
    )
}


// export default ObjectCreator