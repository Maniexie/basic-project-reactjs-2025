// import React from "react";

import { Link } from "react-router-dom";

const Nav = ({ itemNav }) => {
  return (
    <>
      <nav className="flex justify-between bg-orange-200">
        <h1 className="flex items-center text-2xl font-bold  text-orange-800 p-2">LOGO</h1>
        <ul className="flex flex-row gap-8 p-2">
          {itemNav.map((item) => (
            <li key={item.id}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav >
    </>
  );
};

export default Nav;
