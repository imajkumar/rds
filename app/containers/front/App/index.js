/**
 *
 * App
 * TODO  Need create UI front End with login and register 
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
// import '../../../../scss/app.scss';
import Login from'./Login'
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';

import '../../../scss/app.scss';
import Router from './Router';

import React from 'react';
export default function App() {
  return (
   
    <div> 
       <Helmet
        titleTemplate="%s - Examclass"
        defaultTitle="Examclass"
      >
        <meta name="description" content="A fgf React.js Boilerplate application" />
      </Helmet>
        <Router />       
  </div>
  );
}
