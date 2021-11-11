import React, { useEffect, useState } from "react";
import {Switch, Route} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import MainHero from "./components/MainHero";
import SongsListFull from "./components/SongsListFull";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path= '/' exact>
            <MainHero />
            <SongsListFull />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
