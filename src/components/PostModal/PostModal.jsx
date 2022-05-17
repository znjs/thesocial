import React from "react";

function PostModal() {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="bg-[#454d50] p-4 rounded-lg text-gray-50">
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
              <button className="px-4 py-2 rounded-full  bg-[#11161b] btn border-0 hover:bg-[#11161b70]">
                Post
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export { PostModal };
