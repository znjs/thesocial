import React from "react";
import { Navbar, Post } from "../../components";
import "./profile.css";

function Profile() {
  return (
    <div className="bg-[#11161b] text-gray-50 h-screen w-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-col items-center profile">
        <img
          src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80"
          alt="Profile pic"
          className="rounded-full h-28 w-28 mx-4 object-cover"
        />
        <div className="flex items-center">
          <h2 className="text-xl font-semibold m-3">Alex Stroganoff</h2>
          <h2 className="italic text-lg text-gray-200">@Alex</h2>
        </div>
        <div className="flex justify-evenly w-full max-w-4xl my-3">
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
        <div>
          <label
            htmlFor="my-modal-4"
            className="modal-button border-0 px-4 py-2 rounded-full btn background-clr hover:bg-[#454d50] my-2 text-base">
            <i className="fa-solid fa-plus mx-2"></i>
            Create new Post
          </label>
          <label htmlFor="my-modal" className="btn modal-button border-0 px-4 py-2 rounded-full">
            <i className="fa-solid fa-pen-to-square mx-2"></i>
            Edit Profile
          </label>
        </div>
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box bg-[#454d50]">
            <div>
              <div className="flex items-center">
                <h3 className="font-bold text-lg w-24">User:</h3>
                <div className="indicator my-3">
                  <input
                    type="file"
                    name="profileImg"
                    id="profileImg"
                    className="h-0 w-0"
                    accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                  />
                  <label htmlFor="profileImg" className="cursor-pointer">
                    <span className="indicator-item badge badge-secondary">
                      <i className="fa-solid fa-pencil"></i>
                    </span>
                  </label>
                  <div className="grid w-20 h-20 place-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80"
                      alt="Profile pic"
                      className=" h-20 w-20 rounded-xl mx-4 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex my-3">
                <p className="w-24">Name:</p>
                <p>Alex Stroganoff</p>
              </div>
              <div className="flex my-3">
                <p className="w-24">Username:</p>
                <p>@Alex</p>
              </div>
              <div className="flex my-3">
                <label htmlFor="link" className="w-24">
                  Website:
                </label>
                <input
                  placeholder="https://abcxyz.netlify.app"
                  type="text"
                  id="link"
                  name="link"
                  className="bg-gray-600 outline-0 px-2 py-1"
                />
              </div>
              <div className="flex my-3">
                <label htmlFor="Bio" className="w-24">
                  Bio:
                </label>
                <textarea
                  rows="3"
                  cols="25"
                  placeholder="I am From Bangalore...&#10;I Love Coding..."
                  type="text"
                  id="Bio"
                  name="Bio"
                  className="bg-gray-600 outline-0 px-2 py-1"
                />
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn bg-red-600 border-0">
                Cancel
              </label>
              <label htmlFor="my-modal" className="btn bg-[#11161b] border-0">
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
