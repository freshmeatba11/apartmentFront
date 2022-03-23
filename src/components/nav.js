import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import AuthService from "../services/auth.service";

import Logo from "../assets/images/logo.png";

const NavLiComponent = ({ to, text }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={clsx(
          "text-xl text-stone-100 text-opacity-75 tracking-[.1em]",
          "hover:text-opacity-100",
          "transition-all duration-300"
        )}
      >
        {text}
      </NavLink>
    </li>
  );
};

export const Nav = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    AuthService.logout();
    setCurrentUser(null);
    window.alert("Logout successfully, now you are redirect to the homepage.");
    navigate("/");
  };
  return (
    <div
      className={clsx(
        "bg-[#9B826B] shadow-md",
        "px-4 py-4",
        "flex items-center",
        "sticky top-0 z-50"
      )}
    >
      <div>
        <img src={Logo} alt="" className="min-w-[64px] h-16" />
      </div>
      <ul className="flex pl-2 flex-wrap gap-y-1 gap-x-6">
        <NavLiComponent to="/room" text="Room" />
        <NavLiComponent to="/space" text="Space" />
        <NavLiComponent to="/info" text="Info" />
        {!currentUser && (
          <>
            <NavLiComponent to="/reservation" text="Reservation" />
            <NavLiComponent to="/login" text="Login" />
            <NavLiComponent to="/signup" text="Sign Up" />
          </>
        )}
        {currentUser && (
          <li
            className={clsx(
              "text-xl text-stone-100 text-opacity-75 tracking-[.1em] cursor-pointer",
              "hover:text-opacity-100",
              "transition-all duration-300"
            )}
            onClick={logoutHandler}
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
