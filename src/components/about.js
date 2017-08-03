import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        About me
        <Link to='/'>
          <button type="button">Home</button>
        </Link>
      </div>
    )
  }
}

export default About;
