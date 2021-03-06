import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MobileNav, Navbar, Post } from "../../components";
import { triggerToast } from "../../utils/toastTrigger";
import { updateProfile } from "../Auth/authSlice";
import { fetchUserPosts } from "../Home/postSlice";
import "./profile.css";

function Profile() {
  const encodedToken = useSelector((state) => state.auth.encodedToken);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);
  const [profileUpdate, setProfileUpdate] = useState({
    website: user.website || "",
    bio: user.bio || "",
  });
  const dispatch = useDispatch();
  const fetchFlag = useSelector((state) => state.post.fetchFlag);
  const userPosts = useSelector((state) => state.post.userPosts);

  useEffect(() => {
    dispatch(fetchUserPosts(user.username));
  }, [fetchFlag, dispatch, user.username]);

  useEffect(() => {
    if (!!!encodedToken) {
      navigate("/login");
    }
  }, [navigate, encodedToken]);

  const uploadImageHandler = async (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_TOKEN);
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch("https://api.cloudinary.com/v1_1/znjs/image/upload", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        dispatch(updateProfile({ encodedToken, data: { profileImage: json.url } }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#11161b] text-gray-50 h-screen w-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-col items-center profile">
        <img
          src={user.profileImage}
          alt="Profile pic"
          className="rounded-full h-28 w-28 mx-4 object-cover"
        />
        <div className="flex items-center">
          <h2 className="text-xl font-semibold m-3">{user.firstName + " " + user.lastName}</h2>
          <h2 className="italic text-lg text-gray-200">@{user.username.split("@")[0]}</h2>
        </div>
        <div className="flex justify-evenly w-full max-w-4xl my-3">
          <div className="text-center flex-grow border-r border-slate-50">
            <p className="font-semibold ">{userPosts.length}</p>
            <p>Posts</p>
          </div>
          <div className="text-center flex-grow border-r border-slate-50">
            <p className="font-semibold">{user.followers.length}</p>
            <p>Followers</p>
          </div>
          <div className="text-center flex-grow">
            <p className="font-semibold">{user.following.length}</p>
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
        <div className="w-full">
          {!!userPosts.length &&
            [...userPosts]
              .reverse()
              .map((post) => (
                <Post
                  key={post._id}
                  name={user.firstName + " " + user.lastName}
                  tag={user.username.split("@")[0]}
                  post={post}
                  edit={true}
                />
              ))}
        </div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal bg-[#454d5060] backdrop-blur-sm">
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
                    onChange={(e) => {
                      uploadImageHandler(e.target.files[0]);
                    }}
                  />
                  <label htmlFor="profileImg" className="cursor-pointer">
                    <span className="indicator-item badge badge-secondary">
                      <i className="fa-solid fa-pencil"></i>
                    </span>
                  </label>
                  <div className="grid w-20 h-20 place-items-center">
                    <img
                      src={user.profileImage}
                      alt="Profile pic"
                      className="h-20 w-20 rounded-xl mx-4 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex my-3">
                <p className="w-24">Name:</p>
                <p>{user.firstName + " " + user.lastName}</p>
              </div>
              <div className="flex my-3">
                <p className="w-24">Username:</p>
                <p>@{user.username.split("@")[0]}</p>
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
                  value={profileUpdate.website}
                  onChange={(e) =>
                    setProfileUpdate((prev) => ({ ...prev, website: e.target.value }))
                  }
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
                  value={profileUpdate.bio}
                  onChange={(e) => setProfileUpdate((prev) => ({ ...prev, bio: e.target.value }))}
                />
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn bg-red-600 border-0">
                Cancel
              </label>
              <label
                htmlFor="my-modal"
                className="btn bg-[#11161b] border-0"
                onClick={() => {
                  dispatch(updateProfile({ encodedToken, data: profileUpdate }));
                  triggerToast("success", "Profile Updated");
                }}>
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export { Profile };
