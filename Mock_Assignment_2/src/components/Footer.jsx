import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; 
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-[#eb8c34] text-white py-4 fixed bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Explorin. All Rights Reserved</p>

          <div className="flex space-x-4">
            <Link
              to="https://www.facebook.com"
              className="text-white hover:text-gray-300 cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              to="https://www.twitter.com"
              className="text-white hover:text-gray-300 cursor-pointer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              to="https://www.instagram.com"
              className="text-white hover:text-gray-300 cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              to="https://www.linkedin.com"
              className="text-white hover:text-gray-300 cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
