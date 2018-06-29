import React, { Component } from 'react';
import Link from 'gatsby-link';

import './header.css';

import navLogo from '../assets/Phil_Vector.png';


// header handles state for nav visibility

export default class Header extends Component {
  state = {
    navOpen: false
  }
  render() {
    const { navOpen } = this.state;
    return (
      <div className="header">
        <div className="navLogo">
          <Link to="/">
            <img src={navLogo} />
            {/* <h3>Seafood <span style={{ display: 'block' }}>Phil</span></h3> */}
          </Link>
        </div>
        <div className="navBtnWrap">
          <button className={navOpen ? "navBtn open" : "navBtn"} onClick={() => this.setState({ navOpen: !navOpen })}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav id="nav" className={navOpen ? 'navOpen' : ''}>
          <ul>
            <li>
              <Link to="/" onClick={() => this.setState({ navOpen: false })}>Home</Link>
            </li>
            <li><Link to="/order" onClick={() => this.setState({ navOpen: false })}>Make an Order</Link></li>
            <li className="break">
              <a href="" onClick={() => this.setState({ navOpen: false })}>@1nation_ent</a>
            </li>
            <li>
              <a href="mailto:contact@seafoodphil.com" onClick={() => this.setState({ navOpen: false })}>contact@seafoodphil.com</a>
            </li>
            <li>
              <a href="" onClick={() => this.setState({ navOpen: false })}>(678) 633-4937</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
