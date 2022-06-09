import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { logout } from "../../features";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar bg-base-100 px-4 py-2">
        <div className="flex-none cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="flex-1">
          <p className="ff-nickainley text-2xl mx-4 cursor-pointer" onClick={() => navigate("/")}>
            The Social
          </p>
        </div>
        {/* COMMENTED FOR FUTURE PURPOSES */}
        {/* <div className="dropdown dropdown-end">
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
        </div> */}
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
            <li onClick={() => navigate("/profile")} className="bg-[#424F55] hover:bg-[#2c3133]">
              <p>Profile</p>
            </li>
            <li
              onClick={() => {
                dispatch(logout({ navigate }));
              }}
              className="bg-red-500 hover:bg-red-600">
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
