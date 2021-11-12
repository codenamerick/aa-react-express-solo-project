import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as songActions from '../../store/songs';
import './UploadSong.css';

const UploadForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setSongUrl('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        dispatch(songActions.createSong({
            userId,
            title,
            imageUrl,
            songUrl
        }))
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
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
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
                <button>Upload</button>
            </form>
        </div>
    );
};



export default UploadForm;