import React from "react";
import { NavLink } from "react-router-dom";
import "./mobileNav.css";

function MobileNav() {
  return (
    <div className="bg-gray-700 fixed bottom-0 left-0 right-0 flex justify-evenly max-h-[50px] items-center py-2 mobileNav">
      <NavLink
        to="/"
        className={({ isActive }) => {
          let active = isActive ? "bg-[#11161b]" : "";
          return (
            "text-lg rounded-lg  hover:bg-[#11161b50] btn border-0 cursor-pointer my-2 " + active
          );
        }}>
        <i className="text-2xl fa-solid fa-house"></i>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => {
          let active = isActive ? "bg-[#11161b]" : "";
          return (
            "text-lg rounded-lg  hover:bg-[#11161b50] btn border-0 cursor-pointer my-2 " + active
          );
        }}>
        <i className="text-2xl fa-solid fa-compass"></i>
      </NavLink>
      <i className="text-2xl fa-solid fa-plus cursor-pointer"></i>
      <NavLink
        to="/bookmark"
        className={({ isActive }) => {
          let active = isActive ? "bg-[#11161b]" : "";
          return (
            "text-lg rounded-lg  hover:bg-[#11161b50] btn border-0 cursor-pointer my-2 " + active
          );
        }}>
        <i className="text-2xl fa-solid fa-bookmark"></i>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => {
          let active = isActive ? "bg-[#11161b]" : "";
          return (
            "text-lg rounded-lg  hover:bg-[#11161b50] btn border-0 cursor-pointer my-2 " + active
          );
        }}>
        <i className="text-2xl fa-solid fa-circle-user"></i>
      </NavLink>
    </div>
  );
}

export { MobileNav };
