import { useCallback, useState, useEffect } from "react"
import ColoredObject from"./ColoredObject"
import CodeEditor from "./CodeEditor"
import { code_key, baseUrl } from '@/global'
import Mensage from "@/extraComponets/Mensage"
import axios from "axios"

interface PropsObjectCreator {
    paginationObject: object
    setPaginationObject: any
    setPagesItens: any
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
    console.log(storageCode)
    setCode(storageCode)
}

function setStorageObject(code: string) {
    localStorage.setItem(code_key, code)
}




export default function ObjectCreator(props: any) {
    const [editMode, setEditMode] = useState(false)
    const [code, setCode] = useState('')
    const [mesage, setMensage] = useState(['', 300, false])

    useEffect(() => getStorageObject(setCode), [])


    function handleResponse(res: any) {
        const msg = res.msg ?? 'Success'
        setMensage([res.msg, res.status, true])

        setTimeout(()=> setMensage([res.msg, res.status, false]), 6000)
    }
    
    function getPages(code: string, setPagesItens: any) {
        //MEXER NISSO, ELE TÁ RECEBENDO APENAS {}
        // const codeAsString = String(code)
        const codeAsJson = JSON.stringify(code).replaceAll(`\\n`, '')
        const parsedCode = JSON.parse(codeAsJson)
        console.log(Object.create(parsedCode))
        axios.put(`${baseUrl}/pagination`, )
            .then(res => { console.log(res.data)   ;    return res})
            .then(handleResponse)
            .catch(handleResponse)
    }


    function changeEditMode(newMode: boolean):any {
        setEditMode(newMode) 
    }

    function changeCode(newValue:any) {
        setCode(newValue)
    }


    async function send() {
        // await //request
        getPages(code, setCode)
        setStorageObject(code)
        
        changeEditMode(false)
    }
    

    return (
        <>
            <Mensage msg="Errorororooror roorororoororo" status={400}></Mensage>
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