import React from 'react'
import { createPortal } from 'react-dom'
import './Backdrop.scss'

const Backdrop = ({onClick} : {onClick: ()=>void}) => {
    return createPortal(
        <div className="backdrop" onClick={onClick}>
            
        </div>, document.getElementById('backdrop') as HTMLElement
    )
}

export default Backdrop
