import React, {useState} from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import './SignupForm.css';

const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return (
            <Redirect to='/' />
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        if (password === confirmPassword) {
            setErrors([]);

            return dispatch(sessionActions.signup({
                email,
                username,
                password,
            }))
                .catch(async (res) => {
                    const data = await res.json();

                    if (data && data.errors) {
                        setErrors(data.errors);
                    }
                });
        }

        return setErrors(['Password and Confirm Password must match']);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
            <label>
                Email
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Username
                <input type='type' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <label>
                Password
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <label>
                Confirm Password
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>
            <button>Sign Up</button>
        </form>
    );
};



export default SignupForm;
