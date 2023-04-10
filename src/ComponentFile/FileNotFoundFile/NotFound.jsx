import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>404!! File not found</h2>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default NotFound;