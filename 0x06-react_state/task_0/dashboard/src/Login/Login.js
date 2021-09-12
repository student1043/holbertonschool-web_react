import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:
        <input id="email" type="email" className={css(styles.input)} />
      </label>
      <label htmlFor="password">Password:
        <input id="password" type="password" className={css(styles.input)} />
      </label>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: '10px',
    '@media screen and (max-width: 900px)': {
      marginLeft: '0',
    }
  },

  input: {
    marginLeft: '10px',
    marginRight: '10px',
    '@media screen and (max-width: 900px)': {
      display: 'block',
      marginLeft: '0',
      marginTop: "10px",
      marginBottom: "10px",
    }
  },
});

export default Login;
