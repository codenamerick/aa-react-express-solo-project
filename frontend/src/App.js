import React, { useEffect, useState } from "react";
import {Switch, Route} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import { getAllSongs } from "./store/songs";
import MainHero from "./components/MainHero";
import SongsListFull from "./components/SongsListFull";
import SongPortalFull from "./components/SongPortalFull";
import UploadSong from "./components/UploadSong";
import SongEdit from "./components/SongEdit";
import Player from "./components/Player";
import PageNotFound from "./components/PageNotFound";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllSongs());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Switch>
            <Route path= '/' exact>
              <MainHero />
              <SongsListFull />
            </Route>
            <Route path= '/songs' exact>
              <div className='temp-spacer'></div>
              <SongsListFull />
            </Route>
            <Route path= '/songs/:songId' exact>
              <SongPortalFull />
              <SongsListFull />
            </Route>
            <Route path= '/songs/:songId/edit' exact>
              <SongEdit />
            </Route>
            <Route path= '/users/:userId' exact>
              <UserProfile />
            </Route>
            <Route path= '/upload'>
              <UploadSong />
            </Route>
            <Route path= '/'>
              <PageNotFound />
            </Route>
          </Switch>
          <Player />
        </>
      )}
    </>
  );
}

export default App;
