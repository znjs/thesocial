import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Navbar, Suggestion } from "../../components";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#11161b] text-gray-50 h-screen w-screen flex flex-col">
      <Navbar />
      <div className="w-screen max-w-[1600px] homeContainer flex mx-auto mt-2">
        <div className="w-1/5 p-2">
          <div className="flex flex-col items-center background-clr py-3 rounded-lg">
            <div className="text-center my-2">
              <img
                src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80"
                alt="Profile pic"
                className="rounded-full h-28 w-28 object-cover cursor-pointer"
                onClick={() => navigate("/profile")}
              />
              <p
                onClick={() => navigate("/profile")}
                className="font-semibold text-lg cursor-pointer">
                Alex Stroganoff
              </p>
              <p onClick={() => navigate("/profile")} className="text-lg italic cursor-pointer">
                @Alex
              </p>
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
        <div className=" w-1/5 p-2">
          <Suggestion />
        </div>
      </div>
    </div>
  );
}

export { Home };
