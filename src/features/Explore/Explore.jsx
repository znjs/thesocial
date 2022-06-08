import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components";
import { fetchPosts } from "../Home/postSlice";

function Explore() {
  const posts = useSelector((state) => state.post.posts);
  const fetchFlag = useSelector((state) => state.post.fetchFlag);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchFlag]);
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">Explore:</h2>
      {[...posts].reverse().map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export { Explore };
