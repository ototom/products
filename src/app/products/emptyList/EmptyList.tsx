import React from 'react';
import './EmptyList.scss';

const EmptyList = () => {
    return (
        <div className='container'>
            <div className='empty-list'>
                <i className='empty-list__icon'></i>
                <h3>Oops... It's empty here</h3>
                <p>There are no products on the list</p>
            </div>
        </div>
    );
};

export default EmptyList;
