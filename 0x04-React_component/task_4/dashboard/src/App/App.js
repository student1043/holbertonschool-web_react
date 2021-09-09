import React from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';


const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.LogoutKey = props.LogoutKey;
  }
  componentDidMount() {
    document.addEventListener('keydown', this.LogoutKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.LogoutKey);
  }
  LogoutKey(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          {  isLoggedIn === false && <BodySectionWithMarginBottom title='Log in to continue'><Login /></BodySectionWithMarginBottom> }
          {  isLoggedIn === true && <BodySectionWithMarginBottom title='Course list'> <CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>  }
          <BodySection title='News from the School'>
            <p>random phrase</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
}

export default App;
