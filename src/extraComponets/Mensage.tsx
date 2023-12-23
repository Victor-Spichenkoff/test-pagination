import React from 'react'

interface  PropsMensage{
    msg: string
    status?: number
}

const Mensage =(props: PropsMensage) => {
    const status = props.status
    const selectedClass =  status || 200 < 299 ? 'success mensage' : 'error mensage'
    
    return(
        <div className={selectedClass}>{ props.msg }</div>
    )
}

export default Mensage