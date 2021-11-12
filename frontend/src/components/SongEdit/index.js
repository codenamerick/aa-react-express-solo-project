import {useSelector} from 'react-redux';
import EditForm from './EditForm';
import './SongEdit.css';

const SongEdit = () => {
    const sessionUser = useSelector(state => state.session.user);

    let editForm;

    if (sessionUser) {
        editForm= (
            <EditForm />
        );
    }

    return (
        <div className='songs-list-full-wrapper'>
            {editForm}
        </div>
    );
};



export default SongEdit;
