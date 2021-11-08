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
        <ul>
            <li>
                <NavLink exact to='/'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
};



export default Navigation;
