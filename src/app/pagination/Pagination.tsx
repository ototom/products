import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

interface IPagination {
    page: number;
    totalPages: number;
}

const Pagination = ({ page, totalPages }: IPagination) => {
    const [paginationElements, setPaginationElements] = useState<
        React.ReactNode[]
    >([]);

    useEffect(() => {
        const pages = [];

        if (totalPages <= 6) {
            // case #1: number of pages is lower or equal 6
            // show all pages without "..." divider
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <li
                        className={`pagination__element ${
                            page === i ? 'pagination__element--active' : ''
                        }`}
                        key={i}
                    >
                        <Link to={`/page/${i}`}>{i}</Link>
                    </li>
                );
            }
        } else if (totalPages > 6 && totalPages - page < 5) {
            // case #2: number of pages is higher than 6, but there is less than 5 pages to the end of range

            // show all remaining pages without divider
            for (let i = totalPages - 5; i <= totalPages; i++) {
                pages.push(
                    <li
                        className={`pagination__element ${
                            page === i ? 'pagination__element--active' : ''
                        }`}
                        key={i}
                    >
                        <Link to={`/page/${i}`}>{i}</Link>
                    </li>
                );
            }
        } else if (totalPages > 6 && totalPages - page >= 5) {
            // case #3: number of pages in total is higher than 6 and there is more than 5 pages to the end of rage

            // show the current page the user is on and its neighbours, add divider and show last three pages of the range
            const countStart: number = page > 1 ? page - 1 : 1;

            // generate first pages
            for (let i = countStart; i <= countStart + 2; i++) {
                pages.push(
                    <li
                        className={`pagination__element ${
                            page === i ? 'pagination__element--active' : ''
                        }`}
                        key={i}
                    >
                        <Link to={`/page/${i}`}>{i}</Link>
                    </li>
                );
            }

            // generate last pages
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pages.push(
                    <li
                        className={`pagination__element ${
                            page === i ? 'pagination__element--active' : ''
                        }`}
                        key={i}
                    >
                        <Link to={`/page/${i}`}>{i}</Link>
                    </li>
                );
            }

            // insert three dots in the middle
            pages.splice(
                3,
                0,
                <li className='pagination__element' key='divider'>
                    ...
                </li>
            );
        }

        setPaginationElements(pages);
    }, [page, totalPages]);

    return (
        <div className='container pagination'>
            <ul className='pagination__list'>
                {page > 1 && (
                    <li className='pagination__element pagination__element--first'>
                        <Link to='/page/1'>First</Link>
                    </li>
                )}
                {paginationElements}
                {totalPages !== page && (
                    <li className='pagination__element pagination__element--last'>
                        <Link to={`/page/${totalPages}`}>Last</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
