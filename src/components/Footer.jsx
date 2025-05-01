import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 ">
      <div className=" max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h1 className="lg:text-2xl text-xl font-bold text-blue-800">
            Hr Cloud.
          </h1>
          <p>Empowering HR operations with digital efficiency.</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          <p>Email: contact@hrcloud.com</p>
          <p>Phone: +91 xxxxxxxx</p>
          <p>Indore, India</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-3 text-xl">
            <a href="#">
              <FaFacebook />{" "}
            </a>
            <a href="#">
              <FaTwitterSquare />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6 text-xs">
        © {new Date().getFullYear()} HR Cloud. All rights reserved.
      </div>
    </footer>
  );
};
