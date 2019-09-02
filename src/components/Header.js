import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render() {
      return (
        <header className="center-text">
          <Link to="/"><h1 className="header-text">douglasrcjames.com</h1></Link>
        </header>
      );
    }
}

export default Header;
