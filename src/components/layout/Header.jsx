import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo12.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src={Logo} alt="Intelion" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </button>
            
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            About
          </Link>
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Services
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Contact
          </Link>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;