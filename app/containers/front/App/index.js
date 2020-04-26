/**
 *
 * App
 * TODO  Need create UI front End with login and register 
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
// import '../../../../scss/app.scss';
import '../../../scss/app.scss';

import React from 'react';
export default function App() {
  return (
    <div className='heme-light'>
        <div className="wrapper">
          
    <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Easy
              <span className="account__logo-accent">DEV</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Start your business easily</h4>
        </div>
      
        <div className="account__or">
          <p>Or Easily Using</p>
        </div>
        <div className="account__social">
         
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}
