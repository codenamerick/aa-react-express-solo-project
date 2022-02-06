import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch} from 'react-redux';

const DemoUser = () => {
    const dispatch = useDispatch();
    const [credential] = useState('demo@user.io');
    const [password] = useState('password');

    const handleSubmit = (e) => {
        return dispatch(sessionActions.login({
            credential,
            password,
        }))
    };

    return (
        <button onClick={handleSubmit}>Demo</button>
    );
};

export default DemoUser;
