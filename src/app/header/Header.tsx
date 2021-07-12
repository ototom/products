import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'store/actions/authActions';
import { RootStore } from 'store/store';
import Logo from 'app/logo/Logo';
import SearchField from './searchField/SearchField';
import Filter from 'app/filter/Filter';
import Dropdown from 'app/dropdown/Dropdown';
import './Header.scss';

interface IHeader {
    onToggleActiveFilter: () => void;
    onTogglePromoFilter: () => void;
    onChangeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDropdownPosition {
    top: number;
    left: number;
}

const Header = ({
    onToggleActiveFilter,
    onTogglePromoFilter,
    onChangeSearchValue,
}: IHeader) => {
    const { isLoggedIn } = useSelector((state: RootStore) => state.auth);
    const dispatch = useDispatch();

    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
    const [dropdownPosition, setDropdownPosition] = useState<IDropdownPosition>(
        {
            top: 0,
            left: 0,
        }
    );

    const onLogout = () => {
        setIsDropdownActive(false);
        dispatch(logout());
    };

    const onUserButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.currentTarget.getBoundingClientRect();

        setDropdownPosition({ top: target.bottom, left: target.right - 200 });
        setIsDropdownActive((prev) => !prev);
    };

    return (
        <>
            <header className='header__wrapper'>
                <div className='container header__content'>
                    <Logo className='header__logo' />
                    <SearchField
                        className='header__search'
                        onChange={onChangeSearchValue}
                    />
                    <div className='header__filters'>
                        <Filter
                            name='active-filter'
                            id='active-filter'
                            label='Active'
                            onClick={onToggleActiveFilter}
                        />
                        <Filter
                            name='promo-filter'
                            id='promo-filter'
                            label='Promo'
                            onClick={onTogglePromoFilter}
                        />
                    </div>
                    {isLoggedIn ? (
                        <button
                            className='user-menu-button'
                            onClick={onUserButtonClick}
                        >
                            <img
                                src='https://i.pravatar.cc/50'
                                alt='user avatar'
                            />
                        </button>
                    ) : (
                        <Link
                            to='/login'
                            className='btn-outline'
                            style={{ justifySelf: 'end' }}
                        >
                            Log in
                        </Link>
                    )}
                </div>
            </header>
            <Dropdown isActive={isDropdownActive} position={dropdownPosition}>
                <button className='logout-button' onClick={onLogout}>
                    Logout
                </button>
            </Dropdown>
        </>
    );
};

export default Header;
