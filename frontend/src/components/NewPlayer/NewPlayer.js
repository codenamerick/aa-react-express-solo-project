// import React, {useState, useRef, useEffect} from 'react'
// import NewControls from './NewControls';

// function NewPlayer(props) {
//     const audioEl = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     useEffect(() => {
//         if (isPlaying) {
//             audioEl.current.play();
//         } else {
//             audioEl.current.pause();
//         }
//     });

//     const SkipSong = (forwards = true) => {
//         if (forwards) {
//             props.setCurrentSong(() => {
//                 let temp = props.currentSong;
//                 temp++;

//                 if (temp > props.songs.length - 1) {
//                     temp = 0;
//                 }

//                 return temp;
//             });
//         } else {
//             props.setCurrentSong(() => {
//                 let temp = props.currentSong;
//                 temp--;

//                 if (temp < 0) {
//                     temp = props.songs.length - 1;
//                 }

//                 return temp;
//             });
//         }
//     }

//     return (
//         <div className="c-player">
//             {/* <audio src={props.songs[props.currentSong].src} ref={audioEl}></audio> */}
//             <h4>Playing now</h4>
//             <NewControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
//             {/* <p>Next up: <span>{props.songs[props.nextSong].title} by {props.songs[props.nextSong].artist}</span></p> */}
//         </div>
//     )
// }

// export default NewPlayer;
