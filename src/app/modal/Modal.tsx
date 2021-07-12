import React from 'react';
import { createPortal } from 'react-dom';

import Backdrop from 'app/backdrop/Backdrop';
import createContainer from 'utils/createContainer';
import './Modal.scss';

interface IModal {
    image?: string;
    title: string;
    description: string;
    onClose: () => void;
}

const Modal = ({ image, title, description, onClose }: IModal) => {
    return createPortal(
        <div className='modal'>
            <button className='modal__close-btn' onClick={onClose}></button>
            {image && (
                <div className='modal__image'>
                    <img src={image} alt={title} />
                </div>
            )}
            <h2 className='modal__title'>{title}</h2>
            <p className='modal__description'>{description}</p>
            <Backdrop onClick={onClose} />
        </div>,
        createContainer('modal-container')
    );
};

export default Modal;
