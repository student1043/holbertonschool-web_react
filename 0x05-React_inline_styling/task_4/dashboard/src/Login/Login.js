import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {
	return (
		<React.Fragment>
			<div className={css(styles.LoginBody)}>
				<p>Login to access the full dashboard</p>
				<label htmlFor="email">
					Email:
				</label>
				<input className={css(styles.InputBody)} type="email" name="email" id="email"></input>
				<label htmlFor="password" id="password">
					Password:
				</label>
				<input className={css(styles.InputBody)} type="password" name="password"></input>
				<button className={css(styles.ButtonBody)}>OK</button>
			</div>
		</React.Fragment>
	);
}

const SmallScreen = {
	small: '@media screen and (max-width: 900px)',
  };

const styles = StyleSheet.create({
	LoginBody: {
    padding: '15px 24px',
	[SmallScreen.small]: {
		flexDirection: "row"
	}
  },
  InputBody: {
    margin: '4px',
	[SmallScreen.small]: {
		flexDirection: "row"
	}
  },
  ButtonBody: {
    margin: '5px',
    cursor: 'pointer',
	[SmallScreen.small]: {
		flexDirection: "row"
	}
  },
});

export default Login;
