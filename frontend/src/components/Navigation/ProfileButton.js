import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css';

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();

        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu} style={{backgroundImage:'url(' + user?.profileImageUrl + ')'}} className='profile-btn'>
                {/* <i className='fas fa-user-circle' /> */}
            </button>
            {showMenu && (
                <ul className='profile-dropdown'>
                    <li>Signed in as: <br/> {user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <Link to={{pathname: `/users/${user.id}`}}>Profile</Link>
                    </li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
};


export default ProfileButton;
