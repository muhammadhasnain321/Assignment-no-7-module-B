// src/LoginForm.js
import React from 'react';
import styles from './Form.module.css';

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h2>Login</h2>
      <label className={styles.label}>
        Email:
        <input type="email" className={styles.input} />
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" className={styles.input} />
      </label>
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;