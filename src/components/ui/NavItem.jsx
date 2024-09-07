import React from 'react';

function NavItem() {
  return (
    <nav className="flex justify-center items-center sticky top-2 z-20 pt-10">
      <ul className="flex items-center space-x-6 pr-2 pl-6 py-4 border-[1px] border-white   bg-white bg-opacity-10 backdrop-blur-lg rounded-full shadow-lg z-10">
        {/* Nav Items */}
        <li className="text-white hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#product">Product</a>
        </li>
        <li className="text-white hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#integration">Integration</a>
        </li>
        <li className="text-white hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#demo">Demo</a>
        </li>
        <li className="text-white hover:text-gray-200 transition font-light cursor-pointer">
          <a href="#pricing">Pricing</a>
        </li>

        {/* Login Button */}
        <li>
          <a
            href="#login"
            className="bg-white text-black font-semibold px-6 py-2 cursor-pointer rounded-full hover:bg-gray-100 transition"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavItem;
