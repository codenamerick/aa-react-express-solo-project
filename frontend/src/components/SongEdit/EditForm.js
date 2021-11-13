import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as songActions from '../../store/songs';
import {useParams, useHistory, Link} from 'react-router-dom';
import './SongEdit.css';

const EditForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const dispatch = useDispatch();
    const {songId} = useParams();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setSongUrl('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        dispatch(songActions.editSong({
            id: songId,
            userId,
            title,
            imageUrl,
            songUrl
        }))
            .then(() => history.push(`/songs/${songId}`))
            .catch(async (res) => {
                const data = await res.json();

                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });

        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div className='input-wrapper'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input type='text' name='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='songUrl'>Song Url</label>
                    <input type='text' name='songUrl' value={songUrl} onChange={(e) => setSongUrl(e.target.value)} required />
                </div>
                <button>Save</button>
            </form>
            <Link to={{pathname: `/songs/${songId}`}}>Cancel</Link>
        </div>
    );
};



export default EditForm;
