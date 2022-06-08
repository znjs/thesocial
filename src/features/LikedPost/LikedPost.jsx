import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../components";

function LikedPost() {
  const posts = useSelector((state) => state.post.posts);
  const username = useSelector((state) => state.auth.userData.username);
  const userLikedPosts = posts.filter((post) =>
    post.likes.likedBy.find((item) => item.username === username),
  );
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">Liked Post:</h2>
      {userLikedPosts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export { LikedPost };
