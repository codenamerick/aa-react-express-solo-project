import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as songActions from '../../store/songs';
import {useParams} from 'react-router-dom';
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
    // const history = useHistory();

    console.log('song id -------', songId);

    // const reset = () => {
    //     setTitle('');
    //     setImageUrl('');
    //     setSongUrl('');
    // };

    // const isURL = (string) => {
    //     let url;

    //     try {
    //         url = new URL(string);
    //     } catch(_) {
    //         return false;
    //     }

    //     return url.protocol === 'http:' || url.protocol === 'https:';
    // };

    const validate = () => {
        const validationErrors = [];
        const url = /^(ftp|http|https):\/\/[^ "]+$/;
        console.log(url.test('ftp://www.goole.com'))

        if (!title) {
            validationErrors.push('Please provide a Title.');
        }

        if (!url.test(imageUrl)) {
            validationErrors.push('Please provide an Image Url.');
        }

        if (!url.test(songUrl)) {
            validationErrors.push('Please provide a Song Url.');
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        const error = validate();
        setErrors(error);

        if (errors.length > 0) {
            // setErrors(data.errors);
            console.log('there are ERRORS!!!', errors);
            return setErrors(errors);
        }

        dispatch(songActions.editSong({
            id: songId,
            userId,
            title,
            imageUrl,
            songUrl
        }))
            // .catch(async (res) => {
            //     const data = await res.json();

            //     if (data && data.errors) {
            //         setErrors(data.errors);
            //     }
            // });

        // reset();
        // history.push(`/songs/${songId}`)
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
        </div>
    );
};



export default EditForm;
