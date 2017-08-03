import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Hi I am from home
        <Link to='/about'>
          <button>About</button>
        </Link>
      </div>
    )
  }
}

export default Home;
