import {useSelector} from 'react-redux';
import EditForm from './EditForm';
import './SongEdit.css';

const SongEdit = () => {
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser);
    let editForm;

    if (sessionUser) {
        editForm= (
            <EditForm />
        );
    }

    return (
        <div className='songs-form'>
            {editForm}
        </div>
    );
};



export default SongEdit;
