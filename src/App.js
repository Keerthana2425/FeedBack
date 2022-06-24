import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeroPage from './Components/HeroPage/HeroPage';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUp from './Components/SignUp/SignUp';
// import SelectCountry from './Components/Reusable/SelectCountry';
// import SelectCountry from './Components/Reusable/SelectCountry';
import LandingPage from './Components/LandingPage/LandingPage';
import HeaderComp from './Components/Reusable/HeaderComp';

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
        {/* <Route exact path="/country">
          <SelectCountry />
        </Route> */}
        <Route exact path="/landing">
          <LandingPage />
        </Route>
        <Route exact path="/head">
          <HeaderComp />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
