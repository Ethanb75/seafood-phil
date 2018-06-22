import React, { Component } from 'react';
import Link from 'gatsby-link';

import './header.css';

import navLogo from '../assets/Phil_Vector.png';


// header handles state for nav visibility
// const Header = ({ siteTitle }) => 

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
              <Link to="/">Home</Link>
            </li>
            <li><Link to="catering">Make an Order</Link></li>
            <li className="break">
              <a href="">@1nation_ent</a>
            </li>
            <li>
              <a href="mailto:contact@seafoodphil.com">contact@seafoodphil.com</a>
            </li>
            <li>
              <a href="">(678) 633-4937</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
