import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = { displayDrawer: false };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleLogOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleLogOut);
  }

  handleLogOut(event) {
    if (event.ctrlKey && event.key === "h") {
      window.alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}/>
        <div>
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title="News from the School">
            <p>[July - 2021] Holberton is opening a new campus in Paris, France, in September</p>
          </BodySection>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    display: 'flex',
    paddingTop: '2rem',
  },

  footer: {
    borderTop: '3px solid #e01d3f',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    fontStyle: 'italic',
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;
