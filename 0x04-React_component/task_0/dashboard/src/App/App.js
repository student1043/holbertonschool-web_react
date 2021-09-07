import React from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          {  isLoggedIn === false && <Login /> }
          {  isLoggedIn === true && <CourseList listCourses={listCourses} /> }
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
