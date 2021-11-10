import React from 'react';
import {Link} from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './MainHero.css';
// import SignupFormModal from '../SignupFormModal';
// import DemoUser from '../DemoUser/DemoUser';

const MainHero = () => {
    // const sessionUser = useSelector(state => state.session.user);

    // let sessionLinks;

    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <>
    //             <LoginFormModal />
    //             <SignupFormModal />
    //             <DemoUser />
    //         </>
    //     );
    // }

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
