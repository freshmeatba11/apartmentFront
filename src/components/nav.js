import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import Logo from "../assets/images/logo.png";

const NavLiComponent = ({ to, text }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={clsx(
          "py-1 px-4 text-xl text-stone-100 text-opacity-75 ",
          "hover:text-opacity-100",
          "transition-all duration-300"
        )}
      >
        {text}
      </NavLink>
    </li>
  );
};

export const Nav = () => {
  return (
    <div className="flex items-center px-4 py-4 bg-amber-900 bg-opacity-75 shadow-md">
      <div>
        <img src={Logo} alt="" className="w-16" />
      </div>
      <ul className="flex pl-2">
        <NavLiComponent to="/room" text="Room" />
        <NavLiComponent to="/space" text="Space" />
        <NavLiComponent to="/info" text="Info" />
        <NavLiComponent to="/notification" text="Notification" />
        <NavLiComponent to="/reservation" text="Reservation" />
      </ul>
    </div>
  );
};

export default Nav;
