import React from 'react';

import { render } from 'tests';

import Pagination from './Pagination';

describe('Pagination should be rendered properly', () => {
    it('Displays all pages if the total number is less or eq 6', () => {
        const { getAllByText } = render(<Pagination page={2} totalPages={6} />);

        expect(getAllByText(/[1-6]/i)).toHaveLength(6);
    });

    it('Displays remaining six elements if there is less than five pages left to the end', () => {
        const { getAllByText, queryByText } = render(
            <Pagination page={15} totalPages={19} />
        );

        expect(getAllByText(/1[4-9]/i)).toHaveLength(6);
        expect(queryByText('...')).not.toBeInTheDocument();
    });
    it('Displays pages with divider if there is more than six pages in total and there is more than five left to the end', () => {
        const { getAllByText, queryByText } = render(
            <Pagination page={14} totalPages={19} />
        );

        expect(getAllByText(/1[3-9]/i)).toHaveLength(6);
        expect(queryByText('...')).toBeInTheDocument();
    });
});
