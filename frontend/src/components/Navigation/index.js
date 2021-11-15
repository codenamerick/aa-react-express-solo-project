import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import DemoUser from '../DemoUser/DemoUser';

const Navigation = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                <DemoUser />
            </>
        );
    }

    return (
        <nav>
            <div>
                <div className='nav-left'>
                    <ul>
                        <li className='nav-logo'>
                            <NavLink exact to='/'>
                                <img src='/assets/soundwave-logo-wht.svg' alt='logo' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/songs'>All Songs</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/upload'>Upload</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <ul>
                        <li>
                            {isLoaded && sessionLinks}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navigation;
