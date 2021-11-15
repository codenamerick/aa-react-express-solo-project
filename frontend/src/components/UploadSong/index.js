import {useSelector} from 'react-redux';
import './UploadSong.css';
import UploadForm from './UploadForm';
import InviteToUpload from './InviteToUpload';

const UploadSong = () => {
    const sessionUser = useSelector(state => state.session.user);

    let uploadForm;
    let invite;

    if (sessionUser) {
        uploadForm= (
            <UploadForm user={sessionUser}/>
        );
    } else {
        invite= (
            <InviteToUpload />
        );
    }

    return (
        <div className='songs-form'>
            {invite}
            {uploadForm}
        </div>
    );
};



export default UploadSong;
