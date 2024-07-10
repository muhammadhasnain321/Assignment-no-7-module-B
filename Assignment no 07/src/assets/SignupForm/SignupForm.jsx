// src/SignupForm.js
import React from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  return (
    <form className={styles.form}>
      <h2>Sign up</h2>
      <label className={styles.label}>
        Name:
        <input type="text" className={styles.input} />
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" className={styles.input} />
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" className={styles.input} />
      </label>
      <button type="submit" className={styles.button}>
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;