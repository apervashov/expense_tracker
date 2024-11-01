import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 px-8 py-4 flex items-center justify-between shadow-lg">
      <div>
        <Link to="/" className="text-white font-bold text-lg">Home</Link>
      </div>
      <div>
        <Link to="/income" className="text-white hover:text-gray-300 font-semibold">Income</Link>
      </div>
      <div>
        <Link to="/expenses" className="text-white hover:text-gray-300 font-semibold">Expenses</Link>
      </div>
      <div>
        <Link to="/dashboard" className="text-white hover:text-gray-300 font-semibold">Dashboard</Link>
      </div>
      <div>
        <Link to="/login" className="text-white hover:text-gray-300 font-semibold">Authorize</Link>
      </div>
    </header>
  );
};

export default Header;
