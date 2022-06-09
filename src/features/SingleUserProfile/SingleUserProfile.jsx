import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Navbar, Post } from "../../components";
import { followUser, unFollowUser } from "../Auth/authSlice";

function SingleUserProfile() {
  const encodedToken = useSelector((state) => state.auth.encodedToken);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [profileData, setProfileData] = useState({
    bio: "",
    firstName: "",
    lastName: "",
    followers: [],
    following: [],
    profileImage: "",
    username: "",
    website: "",
  });
  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    if (!!!encodedToken) {
      navigate("/login");
    }
    (async () => {
      try {
        let res = await axios.get(`/api/users/${userId}`);
        setProfileData(res.data.user);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [userId, encodedToken, navigate]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/api/posts/user/${profileData.username}`);
        setProfilePosts(res.data.posts);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [profileData.username, userId]);

  return (
    <div className="bg-[#11161b] text-gray-50 h-screen w-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-col items-center profile  max-w-[600px] w-full mx-auto">
        <img
          src={profileData?.profileImage}
          alt="Profile pic"
          className="rounded-full h-28 w-28 mx-4 object-cover"
        />
        <div className="flex items-center">
          <h2 className="text-xl font-semibold m-3">
            {profileData?.firstName + " " + profileData?.lastName}
          </h2>
          <h2 className="italic text-lg text-gray-200">@{profileData?.username.split("@")[0]}</h2>
          <button
            className="background-clr ml-4 py-2 px-3 rounded-full"
            onClick={() => {
              userData.following.find((user) => user._id === userId)
                ? dispatch(unFollowUser({ encodedToken, userId: profileData._id }))
                : dispatch(followUser({ encodedToken, userId: profileData._id }));
            }}>
            {userData.following.find((user) => user._id === userId) ? "Unfollow" : "Follow"}
          </button>
        </div>
        <p className="italic">{profileData.bio}</p>
        <div className="flex justify-evenly w-full max-w-4xl my-3">
          <div className="text-center flex-grow border-r border-slate-50">
            <p className="font-semibold ">{profilePosts.length}</p>
            <p>Posts</p>
          </div>
          <div className="text-center flex-grow border-r border-slate-50">
            <p className="font-semibold">{profileData?.followers.length}</p>
            <p>Followers</p>
          </div>
          <div className="text-center flex-grow">
            <p className="font-semibold">{profileData?.following.length}</p>
            <p>Following</p>
          </div>
        </div>
        <div className="w-full">
          {!!profilePosts.length &&
            profilePosts.map((post) => (
              <Post
                key={post._id}
                name={profileData.firstName + " " + profileData.lastName}
                tag={profileData.username.split("@")[0]}
                post={post}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export { SingleUserProfile };
