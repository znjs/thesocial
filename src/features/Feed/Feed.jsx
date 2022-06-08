import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Post } from "../../components";
import { createNewPost, fetchPosts } from "../Home/postSlice";

function Feed() {
  const user = useSelector((state) => state.auth.userData);
  const fetchFlag = useSelector((state) => state.post.fetchFlag);
  let posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  let followingUsers = useSelector((state) => state.auth.userData.following);
  if (!!followingUsers?.length) {
    followingUsers = followingUsers.map((user) => user.username);
  }
  const [newPostData, setNewPostData] = useState("");
  const encodedToken =
    useSelector((state) => state.auth.encodedToken) || localStorage.getItem("encodedToken");
  const navigate = useNavigate();

  function displayPosts() {
    return posts
      ?.filter((post) => [...followingUsers, user?.username]?.includes(post?.username))
      .map((post) => <Post key={post._id} post={post} />);
  }

  useEffect(() => {
    if (!!!encodedToken) {
      navigate("/login");
    }
  }, [encodedToken, navigate]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchFlag, dispatch]);

  return (
    <div className="">
      <div className="background-clr p-4 rounded-lg">
        <div className="flex mb-3">
          <img
            src={user.profileImage}
            alt="Profile pic"
            className="rounded-full h-12 w-12 mx-4 object-cover"
          />
          <textarea
            rows="2"
            cols="25"
            name="message"
            value={newPostData}
            onChange={(e) => setNewPostData(e.target.value)}
            placeholder="What's on your mind?"
            className="bg-transparent flex-grow placeholder:text-gray-200 p-2 rounded-lg outline-0 border border-slate-300 h-[90px]"
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
          <button
            className="px-4 py-2 rounded-full bg-[#11161b] btn border-0 hover:bg-[#11161b70]"
            onClick={() => {
              dispatch(
                createNewPost({
                  postData: { content: newPostData, profileImage: user.profileImage },
                  encodedToken,
                }),
              );
              setNewPostData("");
            }}>
            Post
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mx-4 my-2">
        <h2 className=" text-2xl font-semibold">Feed</h2>
        {/* COMMENTED FOR FUTURE PURPOSES */}
        {/* <div>
          <label className="swap ">
            <input type="checkbox" />
            <i className="text-2xl fa-solid fa-bars flex justify-center items-center text-gray-50 swap-off w-12 h-12"></i>
            <i className="text-2xl fa-solid fa-border-all flex justify-center items-center text-gray-50 swap-on w-12 h-12"></i>
          </label>
        </div> */}
      </div>
      <div className="p-4">{!!posts.length && displayPosts()}</div>
    </div>
  );
}

export { Feed };
