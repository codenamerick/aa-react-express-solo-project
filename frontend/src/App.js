import React, { useEffect, useState } from "react";
import {Route, Switch} from 'react-router-dom';
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return  isLoaded && (
    <Switch>
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/signup'>
        <SignupForm />
      </Route>
    </Switch>
  );
}

export default App;
