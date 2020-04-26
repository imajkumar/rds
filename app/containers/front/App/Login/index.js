import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
//import LogInForm from './components/LogInForm.js';
import LogInForm from './components/LogInForm'

const LogIn = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">examclass
            <span className="account__logo"> .
              <span className="account__logo-accent">in</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Your education network</h4>
        </div>
        {/* <LogInForm onSubmit /> */}
        <LogInForm onSubmit />
        <div className="account__or">
          <p>Or Easily Using</p>
        </div>
        <div className="account__social">
          <Link
            className="account__social-btn account__social-btn--facebook"
            to="/pages/one"
          ><FacebookIcon />
          </Link>
          <Link
            className="account__social-btn account__social-btn--google"
            to="/pages/one"
          ><GooglePlusIcon />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles