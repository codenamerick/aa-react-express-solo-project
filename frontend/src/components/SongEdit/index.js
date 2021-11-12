import {useSelector} from 'react-redux';
// import {useHistory} from 'react-router-dom';
import EditForm from './EditForm';
import './SongEdit.css';

const SongEdit = () => {
    const sessionUser = useSelector(state => state.session.user);
    // const history = useHistory();

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
