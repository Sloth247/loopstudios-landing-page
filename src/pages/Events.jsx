import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div>
      <h1>Events</h1>
      <Link to="/" className="home-link">
        Go back to home
      </Link>
    </div>
  );
}
