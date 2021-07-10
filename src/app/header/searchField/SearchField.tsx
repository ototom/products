import React from 'react'
import './SearchField.scss'

const SearchField = ({className}: {className?:string}) => {
    return (
        <div className={`search-field ${className}`}>
            <input type="text" name="search" id="search"  placeholder="Search" />
            <i className="search-field__icon"></i>
        </div>
    )
}

export default SearchField
