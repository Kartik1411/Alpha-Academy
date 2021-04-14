import React from 'react';

// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import required components
import Header from './components/header';
import RightSideBar from './components/rightside-bar';
import LeftSideBar from './components/leftside-bar';


//  importing pages
import Home from './pages/Home';
import Physics from './pages/Physics';
import Maths from './pages/Maths';
import PageNotFound from './pages/PageNotFound';
import LoginTeacher from './pages/Login-Teacher';
import LoginStudent from './pages/Login-Student';
import Practice from './pages/Practice';
import Help from './pages/Help';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Router>
        <LeftSideBar />
        <RightSideBar />
        <Switch>
            <Route path="/" exact component={LoginTeacher} />
            <Route path="/home" exact component={Home} />
            <Route path="/physics" exact component={Physics} />
            <Route path="/maths" exact component={Maths} />
            
            <Route path="/login-teacher" exact component={LoginTeacher} />
            <Route path="/login-student" exact component={LoginStudent} />
            <Route path="/practice" exact component={Practice} />
            <Route path="/help" exact component={Help} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
