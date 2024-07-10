// src/Form.js
import React, { useState } from 'react';
import styles from './Form.module.css';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

const Form = () => {
  let [Login, setIsLogin] = useState(true);

  let handleToggle = () => {
    setIsLogin(!Login);
  };

  return (
    <div className={styles.formContainer}>
      {Login ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <p>
        {Login ? 
          <a href="#" onClick={handleToggle}>
            Don't have an account? Sign up!
          </a>
         : 
          <a href="#" onClick={handleToggle}>
            Already have an account? Log in!
          </a>
        }
      </p>
    </div>
  );
};

export default Form;