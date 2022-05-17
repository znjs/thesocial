import React from "react";
import { Post } from "../Post/Post";

function Feed() {
  return (
    <div className="">
      <div className="background-clr p-4 rounded-lg">
        <div className="flex mb-3">
          <img
            src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80"
            alt="Profile pic"
            className="rounded-full h-12 w-12 mx-4 object-cover"
          />
          <textarea
            rows="3"
            cols="25"
            name="message"
            placeholder="What's on your mind?"
            className="bg-transparent flex-grow placeholder:text-gray-200 p-2 rounded-lg outline-0 border border-slate-300"
          />
        </div>
        <div className="flex justify-between">
          {/* FEATURE YET TO ADDED IN FUTURE */}
          {/* <label htmlFor="imageUpload">
            <button className="px-3 py-2 rounded-lg  btn border-0">
              <input
                className="imageUpload"
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              />
              <i className="fa-solid fa-image pr-2"></i>
              Image
            </button>
          </label> */}
          <button className="px-4 py-2 rounded-full bg-[#11161b] btn border-0 hover:bg-[#11161b70]">
            Post
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mx-4 my-2">
        <h2 className=" text-2xl font-semibold">Feed</h2>
        <div>
          <label className="swap ">
            <input type="checkbox" />
            <i className="text-2xl fa-solid fa-bars flex justify-center items-center text-gray-50 swap-off w-12 h-12"></i>
            <i className="text-2xl fa-solid fa-border-all flex justify-center items-center text-gray-50 swap-on w-12 h-12"></i>
          </label>
        </div>
      </div>
      <div className="p-4">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export { Feed };
