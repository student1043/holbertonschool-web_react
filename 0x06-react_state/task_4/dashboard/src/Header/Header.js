import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from "../App/AppContext";

export default function Header(props) {
    const { user, logOut } = React.useContext(AppContext);
    return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="Holberton School Logo"/>
        <h1 className={css(styles.heading)}>School dashboard</h1>
        {user.isLoggedIn && <section id="logoutSection"><p>Welcome {user.email} <a onClick={logOut}>(logout)</a></p></section>}
      </div>
    );
  }

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e01d3f',
  },

  heading: {
    color: '#e01d3f',
  },

  logo: {
    width: '180px',
    height: '180px',
  },
});
