import React, { useState, useEffect } from 'react';
import './Rating.scss';

const Rating = ({ rating }: { rating: number }) => {
    const [stars, setStars] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const starsArray = [];
        for (let i = 0; i < 5; i++) {
            starsArray.unshift(
                <button
                    key={i}
                    className={`star ${i < rating ? 'star--is-marked' : ''}`}
                />
            );
        }

        setStars(starsArray);
    }, [rating]);

    return <div className='rating'>{stars}</div>;
};

export default Rating;
