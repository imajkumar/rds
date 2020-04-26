import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './Login'

import MainWrapper from './MainWrapper';





const Router = () => (
  <div className='theme-light'>
        <div className="wrapper">
        <main>
        <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        
        </Switch>
        </main>
        </div>
   </div>
);

export default Router;