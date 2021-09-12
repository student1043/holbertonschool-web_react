import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <header className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppHeaderImage)} alt="logo" />
          <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
        </header>
  );
}

const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    alignItems: "center",
    height: "25vh"
  },
  AppHeaderImage: {
    height: "100%"
  },
  AppHeaderH1: {
    color: "#E0344B",
    fontSize: "2.5rem",
    marginLeft: "1rem"
  }
});

export default Header;
