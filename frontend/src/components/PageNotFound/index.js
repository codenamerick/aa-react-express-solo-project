import React from 'react';
import {Link} from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='not-found-wrapper'>
            <div>
                <h2>Looks like you're lost so let us guide you <Link to='/'>home</Link>!</h2>
                <img src='/assets/404-page-img.png' alt='404' />
            </div>
        </div>
    );
};



export default PageNotFound;
