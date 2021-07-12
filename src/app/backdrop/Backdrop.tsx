import React from 'react';
import { createPortal } from 'react-dom';

import createContainer from 'utils/createContainer';
import './Backdrop.scss';

const Backdrop = ({ onClick }: { onClick: () => void }) => {
    return createPortal(
        <div className='backdrop' onClick={onClick}></div>,
        createContainer('backdrop-container')
    );
};

export default Backdrop;
