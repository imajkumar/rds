/**
 *
 * App
 * TODO  Need create UI front End with login and register 
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
// import '../../../../scss/app.scss';
import Login from'./Login'

import 'bootstrap/dist/css/bootstrap.css';

import '../../../scss/app.scss';
import Router from './Router';

import React from 'react';
export default function App() {
  return (
    <div>       
        <Router />       
  </div>
  );
}
