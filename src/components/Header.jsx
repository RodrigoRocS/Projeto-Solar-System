import React, { Component } from 'react';
import logo from '../images/logo-sistema-solar.png';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={ logo } alt="" />
      </header>
    );
  }
}

export default Header;
