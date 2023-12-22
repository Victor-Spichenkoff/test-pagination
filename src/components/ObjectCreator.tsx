import { useState } from "react"
import ColoredObject from"./ColoredObject"
import CodeEditor from "./CodeEditor"


interface PropsObjectCreator {
    paginationObject: object
    setPaginationObject: void
}

function ObjectCreator(props: any) {
    const [editMode, setEditMode] = useState(false)

    const teste:string = `{
    pagination: {
        page: 1
    },
    fields: {
        nome: 'name',
        array: ['name', 'number']
    }
}`
    const [code, setCode] = useState(teste)



    function changeEditMode(newMode: boolean):any {
        setEditMode(newMode) 
    }

    function changeCode(newValue:any) {
        setCode(newValue)
    }
    

    return (
        <>
            <div id='object-area'>
            {editMode ? (
                
                    <CodeEditor code={code} onChange={changeCode}/>
                ) : (
                    // 'objt'
                    <ColoredObject code={code}></ColoredObject>
                )
            }
            </div>
            <div id="edit-send">
                <button id='edit' onClick={() => changeEditMode(true)}>Edit</button>
                <button id='send' onClick={() => changeEditMode(false)}>Send</button>
            </div>
        </>
    )
}


export default ObjectCreator