import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeroPage from './Components/HeroPage/HeroPage';
import LoginForm from './Components/SystemAdmin/LoginForm/LoginForm';
import SignUp from './Components/SignUp/SignUp';
import LandingPage from './Components/SystemAdmin/LandingPage/LandingPage';
import FeedBack from './Components/Customer/Rating/FeedBack';
import SuperLanding from './Components/SuperAdmin/SuperLanding';
import TemporaryDrawer from './Components/SuperAdmin/ClientDetails';
import RequestDemo from './Components/SystemAdmin/RequestDemo/RequestDemo';

function App() {
  return (
    <BrowserRouter>
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
        {/* <Route exact path="/head">
          <HeaderComp />
        </Route> */}
        <Route exact path="/feedback">
          <FeedBack />
        </Route>
        <Route exact path="/superLanding">
          <SuperLanding />
        </Route>
        <Route exact path="/clientDetails">
          <TemporaryDrawer />
        </Route>
        <Route exact path="/requestDemo">
          <RequestDemo />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
