import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components";
import { fetchBookmarkPost } from "../Home/postSlice";

function Bookmark() {
  const dispatch = useDispatch();
  const fetchFlag = useSelector((state) => state.post.fetchFlag);
  const userBookmarks = useSelector((state) => state.post.userBookmarks);

  useEffect(() => {
    dispatch(fetchBookmarkPost());
  }, [fetchFlag, dispatch]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">Bookmark:</h2>
      {userBookmarks.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export { Bookmark };
