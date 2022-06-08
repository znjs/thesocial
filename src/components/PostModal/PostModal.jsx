import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../../features/Home/postSlice";

function PostModal() {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const encodedToken = useSelector((state) => state.auth.encodedToken);
  const [postData, setPostData] = useState({ content: "", profileImage: user.profileImage });
  useEffect(() => {
    setPostData((prev) => ({ ...prev, profileImage: user.profileImage }));
  }, [user]);
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="bg-[#454d50] pt-12 p-4 rounded-lg text-gray-50 relative">
            <div className="flex mb-3">
              <img
                src={user?.profileImage}
                alt="Profile pic"
                className="rounded-full h-12 w-12 mx-4 object-cover"
              />
              <textarea
                rows="3"
                cols="25"
                name="message"
                placeholder="What's on your mind?"
                className="bg-transparent flex-grow placeholder:text-gray-200 p-2 rounded-lg outline-0 border border-slate-300"
                value={postData?.content}
                onChange={(e) => setPostData((prev) => ({ ...prev, content: e.target.value }))}
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
              <label
                htmlFor="my-modal-4"
                className="rounded-full  text-gray-50 btn border-0 hover:text-gray-300 absolute top-0 right-0"
                onClick={() => setPostData((prev) => ({ ...prev, content: "" }))}>
                <i className="fa-solid fa-xmark"></i>
              </label>
              <label
                htmlFor="my-modal-4"
                className="px-4 py-2 rounded-full ml-auto bg-[#11161b] btn border-0 hover:bg-[#11161b70]"
                onClick={() => {
                  if (postData?.content.trim().length > 0) {
                    dispatch(createNewPost({ postData, encodedToken }));
                    setPostData((prev) => ({ ...prev, content: "" }));
                  }
                }}>
                Post
              </label>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export { PostModal };
