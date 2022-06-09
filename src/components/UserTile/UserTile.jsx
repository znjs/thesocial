import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser } from "../../features";
import "./userTile.css";

function UserTile({ user }) {
  const dispatch = useDispatch();
  const encodedToken = useSelector((state) => state.auth.encodedToken);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex items-center justify-between max-w-[260px] my-3 cursor-pointer rounded-lg hover:bg-[#454d50] py-2 px-2"
        onClick={(e) => {
          navigate(`/user/${user._id}`);
        }}>
        <img
          src={user.profileImage}
          alt="Profile pic"
          className="rounded-full h-10 w-10 mx-4 object-cover"
        />
        <p>{user.username.split("@")[0]}</p>
        <button
          className="background-clr hover:bg-[#11161b] py-2 px-3 rounded-full followBtn"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(followUser({ encodedToken, userId: user._id }));
          }}>
          <i className="fa-solid fa-plus"></i> Follow
        </button>
      </div>
    </>
  );
}

export { UserTile };
