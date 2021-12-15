import './Creation.scss';
import { Link } from 'react-router-dom';

export default function Creation() {
  return (
    <section className="creation" aria-labelledby="creation">
      <h2 className="creation__title" id="creation">
        Our Creations
      </h2>
      <ul className="creation__list">
        <li className="creation__list-item">
          <Link to="./products/deep-earth" className="creation__link-earth">
            Deep Earth
          </Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/night-archade" className="creation__link-arcade">
            Night Arcade
          </Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/soccor-team">Soccer Team VR</Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/the-grid">The Grid</Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/from-up-above">From up above VR</Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/pocket-borealis">Pocket Borealis</Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/the-curiosity">The curiosity</Link>
        </li>
        <li className="creation__list-item">
          <Link to="./products/make-it-fisheye">Make it fisheye</Link>
        </li>
      </ul>
      <Link to="./products" className="see-btn">
        See All
      </Link>
    </section>
  );
}
