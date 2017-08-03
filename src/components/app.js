import React, { Component } from 'react';
import Navbar from './navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div>
            <Switch>
              <Route exact path='/about' component={About}/>
              <Route exact path='/' component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
};

export default App;
