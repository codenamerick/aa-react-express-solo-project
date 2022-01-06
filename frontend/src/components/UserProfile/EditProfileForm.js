import React, {useState} from "react";
import * as userActions from '../../store/users';
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";

const EditUserForm = ({setShowModal}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [username, setUsername] = useState(sessionUser.username);
    const [profileImageUrl, setProfileImageUrl] = useState(sessionUser.profileImageUrl);
    const [bio, setBio] = useState(sessionUser.bio);
    const [errors, setErrors] = useState([]);
    // const history = useHistory();
    const userId = sessionUser.id;

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);


        dispatch(userActions.editUser({
            userId,
            username,
            profileImageUrl,
            bio,
        }))
            .catch(async (res) => {
                const data = await res.json();

                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });

        setShowModal(false)
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
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
            <button>Save Profile</button>
            {/* <Link className='main-btn modal-cancel-btn' to={{pathname: `/users/${sessionUser.id}`}}>Cancel</Link> */}
            {/* <button>Cancel</button> */}
        </form>
    );
};



export default EditUserForm;
