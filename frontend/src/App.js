import React from "react";
import {Route, Switch} from 'react-router-dom';
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginForm />
      </Route>
    </Switch>
  );
}

export default App;
