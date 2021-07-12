import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = ({ isSmall }: { isSmall?: boolean }) => {
    return (
        <div
            className={`loading-spinner ${
                isSmall ? 'loading-spinner--small' : ''
            }`}
        ></div>
    );
};

export default LoadingSpinner;
