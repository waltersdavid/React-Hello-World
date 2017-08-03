import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './about';
import Home from './home';

// mywebsite.com/
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
};

export default App;
