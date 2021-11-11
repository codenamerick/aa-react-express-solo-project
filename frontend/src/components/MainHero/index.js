import React from 'react';
import {Link} from 'react-router-dom';
import './MainHero.css';

const MainHero = () => {
    return (
        <div className='hero-wrapper'>
            <div>
                <h2>Discover more with SoundWave</h2>
                <p>SoundWave lets you listen offline, ad-free, with over 150 million tracks — and growing.</p>
                <Link to='/'>Start uploading today</Link>
            </div>
        </div>
    );
};



export default MainHero;
