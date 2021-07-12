import React from 'react';
import './Filter.scss';

interface IFilter {
    name?: string;
    id: string;
    label?: string;
    onClick: () => void;
}

const Filter = ({ name, id, label, onClick }: IFilter) => {
    return (
        <>
            <input
                type='checkbox'
                name={name}
                id={id}
                className='checkbox'
                onClick={onClick}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
};

export default Filter;
