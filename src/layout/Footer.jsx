import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../images/logo.svg';
import FacebookIcon from '../images/icon-facebook.svg';
import InstagramIcon from '../images/icon-instagram.svg';
import PinterestIcon from '../images/icon-pinterest.svg';
import TwitterIcon from '../images/icon-twitter.svg';

export default function Footer() {
  return (
    <footer className="footer wrapper">
      <nav aria-label="footer navigation" className="footer__nav">
        <div className="footer__logo-container">
          <Link to="/">
            <img src={Logo} alt="loopstudio" className="footer__logo" />
          </Link>
        </div>
        <ul className="footer__menu">
          <li className="footer__menu--item">
            <Link to="/about">About</Link>
          </li>
          <li className="footer__menu--item">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="footer__menu--item">
            <Link to="/events">Events</Link>
          </li>
          <li className="footer__menu--item">
            <Link to="/products">Products</Link>
          </li>
          <li className="footer__menu--item">
            <Link to="/support">Support</Link>
          </li>
        </ul>
        <ul className="footer__icon-container">
          <li>
            <Link to="http://facebook.com">
              <img src={FacebookIcon} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link to="http://twitter.com">
              <img src={TwitterIcon} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link to="http://pinterest.com">
              <img src={PinterestIcon} alt="pinterest" />
            </Link>
          </li>
          <li>
            <Link to="http://instagram.com">
              <img src={InstagramIcon} alt="instagram" />
            </Link>
          </li>
        </ul>
        <p className="footer__copyrights">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </nav>
    </footer>
  );
}
