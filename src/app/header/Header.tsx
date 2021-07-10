import React, {useState} from 'react'
import Logo from 'app/logo/Logo'
import SearchField from './searchField/SearchField'
import './Header.scss'
import Filter from 'app/filter/Filter'
import Dropdown from 'app/dropdown/Dropdown'

const Header = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({top: 0, left:0});

    const onUserButtonClick = (e: React.SyntheticEvent) => {
        const target = e.currentTarget.getBoundingClientRect();

        setDropdownPosition({top: target.bottom, left: target.right-200} )

        setIsDropdownActive(prev => !prev)
    }

    return (
        <>
        <header className="header__wrapper">
            <div className="container header__content">
            <Logo className="header__logo" />
                <SearchField className="header__search" />
            <div className="header__filters">
                <Filter name="active-filter" id="active-filter" label="Active" />
                <Filter name="promo-filter" id="promo-filter" label="Promo" />
            
            </div>
            <button className="user-menu-button" onClick={onUserButtonClick}>
                <img src="https://i.pravatar.cc/150?img=31" alt="user avatar" />
            </button>
            </div>
        </header>
        <Dropdown isActive={isDropdownActive} position={dropdownPosition} />
        </>
    )
}

export default Header
