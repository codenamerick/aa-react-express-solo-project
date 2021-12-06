import {useSelector} from 'react-redux';
import { useParams } from 'react-router';
import PageNotFound from '../PageNotFound';
import EditForm from './EditForm';
import './SongEdit.css';

const SongEdit = () => {
    const {songId} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const song = useSelector(state => (state.songs[songId]));

    let editForm;
    let notFound;

    if (sessionUser.id === song?.User?.id) {
        editForm= (
            <EditForm />
        );
    } else {
        notFound= (
            <PageNotFound />
        );
    }

    return (
        <>
            {notFound}
            <div className='songs-form'>
                {editForm}
            </div>
        </>
    );
};



export default SongEdit;
