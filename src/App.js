import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeroPage from './Components/HeroPage/HeroPage';
import LoginForm from './Components/LoginForm/LoginForm';

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
        <Route path="/">
          <HeroPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
