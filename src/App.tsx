import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import News from './components/News';
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
