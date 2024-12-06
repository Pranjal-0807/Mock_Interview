import React from "react";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-white-800 text-black shadow-md">
      <div className="flex items-center space-x-2">
        <p className="text-2xl">💼</p>
        <p className="text-xl font-semibold">Explorin Solutions</p>
      </div>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-gray-500 transition-colors duration-300">
            My Saved Jobs only
          </span>
        </label>
        <p key="notification" className="text-2xl">
          🔔
        </p>
        <FaUserCircle className="text-xl rounded-full border-2 border-gray-500 p-1 " />
      </div>
    </div>
  );
};

export default NavBar;
