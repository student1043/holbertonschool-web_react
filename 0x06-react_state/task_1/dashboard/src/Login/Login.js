import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    const { value } = e.target;
    const { password } = this.state;

    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    const { value } = e.target;
    const { email } = this.state;

    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ password: e.target.value });
  }
  render () {
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:
            <input id="email" type="email" className={css(styles.input)}
            value={this.state.email}
            onChange={this.handleChangeEmail} />
          </label>
          <label htmlFor="password">Password:
            <input id="password" type="password" className={css(styles.input)}
            value={this.state.password}
            onChange={this.handleChangePassword} />
          </label>
          <input
            className={css(styles.button)}
            type="submit" value="Submit" disabled={!this.state.enableSubmit}>
          </input>
        </form>
      </div>
    );
  }
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
