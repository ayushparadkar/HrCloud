import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-2xl text-xl font-bold text-blue-800">
          HR Cloud.
        </h1>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-blue-800" />
            ) : (
              <Menu className="w-6 h-6 text-blue-800" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex space-x-8 font-bold text-blue-900">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 lg:hidden text-blue-900 font-semibold">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
