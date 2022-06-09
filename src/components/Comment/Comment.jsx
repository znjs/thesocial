import React from "react";

function Comment({ comment, commentUserRoute }) {
  return (
    <div key={comment._id} className=" rounded-lg my-2 flex items-center">
      <img
        src={comment.profileImage}
        alt="profile"
        className="rounded-full h-10 w-10 ml-4 mr-2 object-cover cursor-pointer"
        onClick={() => commentUserRoute(comment.username)}
      />
      <div className="grow px-4 text-sm">
        <p
          className="cursor-pointer font-semibold"
          onClick={() => commentUserRoute(comment.username)}>
          {comment.username.split("@")[0]}
        </p>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}

export { Comment };
