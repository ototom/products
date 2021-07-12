import React from 'react';
import { createPortal } from 'react-dom';

import createContainer from 'utils/createContainer';
import './Dropdown.scss';

interface IDropdown {
    isActive: boolean;
    position: { top: number; left: number };
    children: React.ReactNode;
}

const Dropdown = ({ isActive, position, children }: IDropdown) => {
    if (!isActive) return null;
    return createPortal(
        <div className='dropdown' style={position}>
            {children}
        </div>,
        createContainer('dropdown-container')
    );
};

export default Dropdown;
