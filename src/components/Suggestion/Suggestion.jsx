import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features";
import { UserTile } from "../UserTile/UserTile";
import "./suggestions.css";

function Suggestion() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.userData.username);
  const users = useSelector((state) => state.auth.users);
  let suggestions = users.filter((item) => item.username !== username);
  const fetchFlag = useSelector((state) => state.post.fetchFlag);
  suggestions = suggestions.filter((user) =>
    user?.followers?.every((user) => !(user.username === username)),
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchFlag]);
  return (
    <div className=" p-2 suggestions">
      <h2 className="font-semibold text-lg">People You might know:</h2>
      <div className="my-4 ">
        {suggestions.map((user) => (
          <UserTile user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
}

export { Suggestion };
