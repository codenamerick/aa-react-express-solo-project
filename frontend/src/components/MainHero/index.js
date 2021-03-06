import React from 'react';
import {Link} from 'react-router-dom';
import './MainHero.css';

const MainHero = () => {
    return (
        <div className='hero-wrapper' style={{backgroundImage:'url("https://res.cloudinary.com/dedpxzbak/image/upload/v1644173002/soundwave-hero-bg_1_uxlh6n.png")'}}>
            <div>
                <h2>Discover more with SoundWave</h2>
                <p>SoundWave lets you listen online, ad-free, with over 150 million tracks — and growing.</p>
                <Link to='/upload'>Start uploading today</Link>
            </div>
        </div>
    );
};



export default MainHero;
