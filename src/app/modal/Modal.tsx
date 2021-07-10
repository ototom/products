import Backdrop from 'app/backdrop/Backdrop'
import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

const Modal = ({image, title, description, onClose} : {image?: string, title: string, description: string, onClose: ()=> void}) => {
    return createPortal(
        <div className="modal">
            <button className="modal__close-btn" onClick={onClose}></button>
            {image && <div className="modal__image">
                    <img src={image} alt={title} />
                </div>}
            <h2 className="modal__title">{title}</h2>
            <p className="modal__description">{description}</p>
            <Backdrop onClick={onClose} />
        </div>, document.getElementById('modal-container') as HTMLElement
)
}

export default Modal
