import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404!</h1><br/>
            <h3>Page is not found.</h3>
            <p>The page you are looking for might have been removed <br/>had its name changed or is temporarily unavailable.</p><br/>
            <Link to="/"><button className="main-button">GO TO HOMEPAGE</button></Link>
        </div>
    );
};

export default NotFound;