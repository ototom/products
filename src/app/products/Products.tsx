import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from 'store/actions/productsActions';
import { RootStore } from 'store/store';
import Header from 'app/header/Header';
import Product from './product/Product';
import Pagination from 'app/pagination/Pagination';
import EmptyList from './emptyList/EmptyList';
import LoadingSpinner from 'app/loadingSpinner/LoadingSpinner';
import './Products.scss';

export const Products = () => {
    const history = useHistory();
    const { data, totalPages, isLoading } = useSelector(
        (state: RootStore) => state.products
    );
    const dispatch = useDispatch();

    const { pageNumber } = useParams<{ pageNumber: string }>();

    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPromo, setIsPromo] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [isUserTyping, setIsUserTyping] = useState<boolean>(false);

    const onToggleActiveFilter = (): void => setIsActive((prev) => !prev);
    const onTogglePromoFilter = (): void => setIsPromo((prev) => !prev);
    const onChangeSearchValue = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setIsUserTyping(true);
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (!isUserTyping) {
            dispatch(getProducts(pageNumber, searchValue, isActive, isPromo));
        }

        if (isUserTyping) {
            const timer = setTimeout(() => {
                setIsUserTyping(false);
            }, 700);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isActive, isPromo, searchValue, pageNumber, dispatch, isUserTyping]);

    useEffect(() => {
        if (+pageNumber > totalPages) {
            history.push('/page/1');
        }
    }, [history, pageNumber, totalPages]);

    return (
        <>
            <Header
                onToggleActiveFilter={onToggleActiveFilter}
                onTogglePromoFilter={onTogglePromoFilter}
                onChangeSearchValue={onChangeSearchValue}
            />
            {isLoading ? (
                <LoadingSpinner />
            ) : data.length > 0 ? (
                <>
                    <div className='container products__container'>
                        {data.map((product) => (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                rating={product.rating}
                                image={product.image}
                                promo={product.promo}
                                active={product.active}
                            />
                        ))}
                    </div>
                    <Pagination page={+pageNumber} totalPages={totalPages} />
                </>
            ) : (
                <EmptyList />
            )}
        </>
    );
};
