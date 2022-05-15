import React from "react";
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
            <li className="bg-red-500">
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-screen homeContainer flex mt-2">
        <div className="bg-red-600 w-1/5 p-2">Left Content</div>
        <div className="bg-blue-600 flex-grow p-2">Main Content</div>
        <div className="bg-green-600 w-1/5 p-2">Right Content</div>
      </div>
    </div>
  );
}

export { Home };
