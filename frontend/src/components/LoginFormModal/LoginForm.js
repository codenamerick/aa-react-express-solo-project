import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch} from 'react-redux';
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        return dispatch(sessionActions.login({
            credential,
            password,
        }))
            .catch(async (res) => {
                const data = await res.json();

                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
            <div className='input-wrapper'>
                <label htmlFor='credential'>Username or Email</label>
                <input type='text' name='credential' value={credential} onChange={(e) => setCredential(e.target.value)} required />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button>Log In</button>
        </form>
    );
};

export default LoginForm;
