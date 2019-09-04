import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

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
          <Link to="/"><h1 className="header-logo">douglasrcjames.com</h1></Link>
          <NavLink to="/" exact={true} className="nav-link" activeClassName="nav-select">
            About Me
          </NavLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to="/experience/" exact={true} className="nav-link" activeClassName="nav-select">
            Experience
          </NavLink>
        </header>
      );
    }
}

export default Header;
