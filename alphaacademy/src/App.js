import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Right from './components/rightside-bar';
import LeftSideBar from './components/leftside-bar';

import Home from './pages/Home';
import Physics from './pages/Physics';
import Maths from './pages/Maths';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Right />
      
      <Router>
        <LeftSideBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/physics" exact component={Physics} />
            <Route path="/maths" exact component={Maths} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
