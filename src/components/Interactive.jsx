import './Interactive.scss';
import VRPersonMob from '../images/mobile/image-interactive.jpg';
import VRPersonDesk from '../images/desktop/image-interactive.jpg';

export default function Interactive() {
  return (
    <section className="interactive" aria-labelledby="interactive">
      <img src={VRPersonMob} alt="" className="interactive__hero-mob" />
      <img src={VRPersonDesk} alt="" className="interactive__hero-desk" />
      <div className="interactive__text-container">
        <h2 className="interactive__title" id="interactive">
          The leader in interactive VR
        </h2>
        <p className="interactive__description">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
