import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { logo } from "../../assets";
import "./home.css";

function Home() {
  return (
    <div className="bg-[#11161b] text-gray-50 h-screen w-screen flex flex-col">
      <nav className="navbar bg-base-100 px-4 py-2">
        <div className="flex-none">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="flex-1">
          <button className="ff-nickainley text-2xl mx-4">The Social</button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn m-1 border-0">
            <div className="indicator text-2xl">
              <span className="indicator-item badge rounded-full ">4</span>
              <div className="grid w-10 h-10 bg-base-300 place-items-center">
                <i className="fa-solid fa-bell"></i>
              </div>
            </div>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li className="bg-[#454d50] hover:bg-[#2c3133]">
              <p>Notification 1</p>
            </li>
            <li className="bg-[#454d50] hover:bg-[#2c3133]">
              <p>Notification 2</p>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end  ">
          <label tabIndex="0" className="btn m-1 bg-[#424F55] outline-none border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li className="bg-[#424F55] hover:bg-[#2c3133]">
              <p>Profile</p>
            </li>
            <li className="bg-red-500 hover:bg-red-600">
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-screen max-w-[1600px] homeContainer flex mx-auto mt-2">
        <div className="w-1/5 p-2">
          <div className="flex flex-col items-center background-clr py-3 rounded-lg">
            <div className="text-center my-2">
              <img
                src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80"
                alt="Profile pic"
                className="rounded-full h-28 w-28 object-cover"
              />
              <p className="font-semibold text-lg">Alex Stroganoff</p>
              <p className="text-lg italic">@Alex</p>
            </div>
            <div className="flex justify-evenly w-full">
              <div className="text-center flex-grow border-r border-slate-50">
                <p className="font-semibold ">50</p>
                <p>Posts</p>
              </div>
              <div className="text-center flex-grow border-r border-slate-50">
                <p className="font-semibold">450</p>
                <p>Followers</p>
              </div>
              <div className="text-center flex-grow">
                <p className="font-semibold">450</p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className="">
            <NavLink
              to="/"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-house"></i> <span> Home</span>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-compass"></i> <span> Explore</span>
            </NavLink>
            <NavLink
              to="/liked"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-thumbs-up"></i>
              <span> Liked Posts</span>
            </NavLink>
            <NavLink
              to="/bookmark"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-bookmark"></i> <span> Bookmarks</span>
            </NavLink>
            <div className="flex justify-center">
              {/* <button className="px-3 py-2 rounded-full btn border-0 background-clr hover:bg-[#454d50] my-2 text-base"> */}
              <label
                htmlFor="my-modal-4"
                className="modal-button border-0 px-4 py-2 rounded-full btn background-clr hover:bg-[#454d50] my-2 text-base">
                <i className="fa-solid fa-plus mx-2"></i>
                Create new Post
              </label>
              {/* </button> */}
            </div>
          </div>
        </div>
        <div className="main-container flex-grow p-2">
          <Outlet />
        </div>
        <div className="bg-green-600 w-1/5 p-2"></div>
      </div>
    </div>
  );
}

export { Home };
