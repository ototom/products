import React from 'react';
import './SearchField.scss';

interface ISearchField {
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = ({ className, onChange }: ISearchField) => {
    return (
        <div className={`search-field ${className}`}>
            <input
                type='text'
                name='search'
                id='search'
                placeholder='Search'
                onChange={onChange}
            />
            <i className='search-field__icon'></i>
        </div>
    );
};

export default SearchField;
