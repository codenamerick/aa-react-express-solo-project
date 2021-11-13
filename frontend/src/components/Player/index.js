import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';

// const AudioPlayer = () => {
//     return (
//         <div className='audio-player-wrapper'>
//             <div>
//                 <h2>Audio Player</h2>
//                 <figure>
//                     <audio controls src='https://res.cloudinary.com/dedpxzbak/video/upload/v1636519427/X-POISON_Prod._DT_Hitz_x_Nick_Mira_ptnxta.mp3'>
//                         Your browser does not support the <code>audio</code> element.
//                     </audio>
//                 </figure>
//             </div>
//         </div>
//     );
// };

const Player = () => (
    <AudioPlayer
        autoPlay
        src = 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519427/X-POISON_Prod._DT_Hitz_x_Nick_Mira_ptnxta.mp3'
        onPlay={e => console.log('onPlay')}
    />
);



export default Player;
