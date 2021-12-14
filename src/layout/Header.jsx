import { useState } from 'react';
import { Link } from 'react-router-dom';
import Close from '../images/icon-close.svg';

import './Header.scss';
import Navbar from '../components/Navbar';
import Logo from '../images/logo.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';

export default function Header() {
  const [click, setClick] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setExpanded(!expanded);
  };

  return (
    <header className="header wrapper">
      <nav className="nav">
        <div className="header__icon-container">
          <div className="header__logo-container">
            <Link to="/">
              <img src={Logo} alt="loopstudios" className="header__logo" />
            </Link>
          </div>
          <button
            className="toggle-btn"
            onClick={handleClick}
            aria-expanded={expanded}
            aria-controls="navbar"
          >
            <img
              src={click ? Close : HamburgerIcon}
              alt={click ? 'close mobile menu' : 'open mobile menu'}
              className="toggle-icon"
            />
          </button>
        </div>
        <Navbar click={click} />
      </nav>
      <h1 className="header__title">Immersive experiences that deliver</h1>
    </header>
  );
}
