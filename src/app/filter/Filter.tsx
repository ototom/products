import React from 'react'
import './Filter.scss'

const Filter = ({name, id, label} : {name?:string, id:string, label?:string}) => {
    return (
        <>
            <input type="checkbox" name={name} id={id} className="checkbox" />
            <label htmlFor={id}>{label}</label>
        </>
    )
}

export default Filter
