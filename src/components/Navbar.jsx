import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar({ click }) {
  return (
    <>
      <ul
        className={click ? 'nav__menu wrapper active' : 'nav__menu wrapper'}
        id="navbar"
      >
        <li className="nav__menu--item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__menu--item">
          <Link to="/careers">Careers</Link>
        </li>
        <li className="nav__menu--item">
          <Link to="/events">Events</Link>
        </li>
        <li className="nav__menu--item">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav__menu--item">
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </>
  );
}
