import React, { Component } from 'react';
import Logo from './logo';
import User from './user';

class Navbar extends Component {
  render() {
    return (
      <div style={{display:"flex",justifyContent:"center"}}>
        <Logo />
        <User />
      </div>
    )
  }
}

export default Navbar;
