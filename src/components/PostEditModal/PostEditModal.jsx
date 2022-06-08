import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserPost } from "../../features";

function PostEditModal() {
  const user = useSelector((state) => state.auth.userData);
  const encodedToken = useSelector((state) => state.auth.encodedToken);
  const dispatch = useDispatch();
  const editPost = useSelector((state) => state.post.editPost);
  const [postData, setPostData] = useState({
    content: "",
    profileImage: user.profileImage,
  });

  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      content: editPost.content,
      profileImage: user.profileImage,
    }));
    return () =>
      setPostData((prev) => ({
        ...prev,
        content: "",
      }));
  }, [editPost, user]);

  return (
    <div>
      <input type="checkbox" id="edit-post" className="modal-toggle" />
      <label htmlFor="edit-post" className="modal cursor-pointer ">
        <label className="modal-box relative" htmlFor="">
          <div className="bg-[#454d50] pt-12 p-4 rounded-lg text-gray-50 relative">
            <div className="flex">
              <img
                src={user.profileImage}
                alt="Profile pic"
                className="rounded-full h-12 w-12 mx-4 object-cover"
              />
              <textarea
                rows="3"
                cols="25"
                name="message"
                placeholder="What's on your mind?"
                className="bg-transparent flex-grow placeholder:text-gray-200 p-2 rounded-lg outline-0 border border-slate-300"
                value={postData.content}
                onChange={(e) => setPostData((prev) => ({ ...prev, content: e.target.value }))}
              />
            </div>
            <label
              htmlFor="edit-post"
              className="rounded-full  text-gray-50 btn border-0 hover:text-gray-300 absolute top-0 right-0">
              <i className="fa-solid fa-xmark"></i>
            </label>
            <div className="flex">
              <label
                htmlFor="edit-post"
                className="px-4 py-2 mt-4 rounded-full ml-auto bg-[#11161b] btn border-0 hover:bg-[#11161b70]"
                onClick={() => {
                  dispatch(editUserPost({ postData, postId: editPost._id, encodedToken }));
                }}>
                edit Post
              </label>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}

export { PostEditModal };
