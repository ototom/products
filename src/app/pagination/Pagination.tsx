import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Pagination.scss"

const Pagination = ({page, totalPages}: {page: number, totalPages: number}) => {
    const [paginationElements, setPaginationElements] = useState<React.ReactNode[]>([]);

    useEffect(()=>{
        const pages =[]

        if(totalPages <=6 ) {
            // generate all elems. 
            for(let i = 1; i <= totalPages; i++) {
                pages.push(<li className={`pagination__element ${page === i ? 'pagination__element--active': ''}`} key={i}>{i}</li>)
            }
        } else if(totalPages > 6 && totalPages-page < 5) {
                // generate elements, but add "page-1" to the list.
                // if I am on the third page you should display: 2, 3, 4, 5, 6
            for(let i = totalPages-5; i <= totalPages; i++) {
                pages.push(<li className={`pagination__element ${page === i ? 'pagination__element--active': ''}`} key={i}>{i}</li>)
            }
        } else if(totalPages > 6 && totalPages-page >= 5) {
            const countStart:number = page> 1 ? page-1 : 1;
            // generate 3 first and 3 last elements with separator
            // add "page - 1" do the list
                for(let i = countStart; i <= countStart+2; i++) {
                pages.push(<li className={`pagination__element ${page === i ? 'pagination__element--active': ''}`} key={i}>{i}</li>)
                }
                pages.push(<li className='pagination__element' key="separator">...</li>)
                for(let i = totalPages-2; i <= totalPages; i++) {
                pages.push(<li className={`pagination__element ${page === i ? 'pagination__element--active': ''}`} key={i}>{i}</li>)
                }
        }  else {
            return;
        }
        setPaginationElements(pages);
    },[page, totalPages])

    return (
        <div className="container pagination">
            <ul className="pagination__list">
                {paginationElements}
            </ul>
        </div>
    )
}

export default Pagination
