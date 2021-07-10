import React from 'react'
import {createPortal} from 'react-dom'
import './Dropdown.scss'

const Dropdown = ({isActive, position}: {isActive: boolean, position: {top: number, left: number}}) => {

    if(!isActive) return null;
    return createPortal(
        <div className="dropdown" style={position}>
            <button>Logout</button>
        </div>, document.getElementById('dropdown-container') as HTMLElement
    )
}

export default Dropdown
