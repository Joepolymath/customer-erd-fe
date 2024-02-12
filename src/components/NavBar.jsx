import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            CRM-Project
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="text-white hover:text-gray-200">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-white hover:text-gray-200">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
