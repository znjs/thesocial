import React from "react";
import { Post } from "../Post/Post";

function LikedPost() {
  return (
    <div className="w-full">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export { LikedPost };
