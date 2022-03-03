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
          "text-xl text-stone-100 text-opacity-75 ",
          "hover:text-opacity-100",
          "transition-all duration-300",
          "tracking-[.1em]"
        )}
      >
        {text}
      </NavLink>
    </li>
  );
};

export const Nav = () => {
  return (
    <div
      className={clsx(
        "bg-amber-900 bg-opacity-75 shadow-md",
        "px-4 py-4",
        "flex items-center"
      )}
    >
      <div>
        <img src={Logo} alt="" className="min-w-[64px] h-16" />
      </div>
      <ul className="flex pl-2 flex-wrap gap-y-1 gap-x-6">
        <NavLiComponent to="/room" text="Room" />
        <NavLiComponent to="/space" text="Space" />
        <NavLiComponent to="/info" text="Info" />
        <NavLiComponent to="/utility" text="Utility Bill" />
        <NavLiComponent to="/notification" text="Notification" />
        <NavLiComponent to="/reservation" text="Reservation" />
      </ul>
    </div>
  );
};

export default Nav;
