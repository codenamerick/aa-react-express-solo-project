import React, {useState} from "react";
import * as sessionActions from '../../store/session';
import { useDispatch } from "react-redux";

const SignupForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        if (password === confirmPassword) {
            setErrors([]);

            return dispatch(sessionActions.signup({
                email,
                username,
                profileImageUrl,
                bio,
                password
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
            <div className='input-wrapper'>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='input-wrapper'>
                <label>Username</label>
                <input type='type' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='profileImageUrl'>Profile Image Url</label>
                <input type='text' name='profileImageUrl' value={profileImageUrl} onChange={(e) => setProfileImageUrl(e.target.value)} required />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='bio'>Bio</label>
                <textarea name='bio' value={bio} onChange={(e) => setBio(e.target.value)} required ></textarea>
            </div>
            <div className='input-wrapper'>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='input-wrapper'>
                <label>Confirm Password</label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button>Sign Up</button>
        </form>
    );
};



export default SignupForm;
