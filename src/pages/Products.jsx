import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <Link to="/" className="home-link">
        Go back to home
      </Link>
    </div>
  );
}
