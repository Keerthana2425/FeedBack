import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeroPage from './Components/HeroPage/HeroPage';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <HeroPage />
      </div> */}
      <Switch>
        <Route exact path="/log-in">
          <LoginForm />
        </Route>
        <Route exact path="/">
          <HeroPage />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
