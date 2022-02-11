import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.png";

export const Nav = () => {
  return (
    <div className="flex items-center px-4 py-4 bg-yellow-800 shadow-md">
      <div>
        <img src={Logo} alt="" className="w-16" />
      </div>
      <ul className="flex pl-2">
        <li>
          <NavLink to={"/room"} className="py-1 px-4 text-xl text-white">
            Room
          </NavLink>
        </li>
        <li>
          <NavLink to={"/space"} className="py-1 px-4 text-xl text-white">
            Space
          </NavLink>
        </li>
        <li>
          <NavLink to={"/info"} className="py-1 px-4 text-xl text-white">
            Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/notification"}
            className="py-1 px-4 text-xl text-white"
          >
            Notification
          </NavLink>
        </li>
        <li>
          <NavLink to={"/reservation"} className="py-1 px-4 text-xl text-white">
            Reservation
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
