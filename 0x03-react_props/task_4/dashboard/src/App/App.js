import React from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {  isLoggedIn === false && <Login /> }
        {  isLoggedIn === true && <CourseList /> }
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
