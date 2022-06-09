import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addPostToBookmark,
  addToLikedPosts,
  commentOnPost,
  deletePost,
  removeFromLikedPosts,
  removePostFromBookmark,
  setEditPost,
} from "../../features";
import { Comment } from "../Comment/Comment";

function Post({ post, name, tag = post.username.split("@")[0], edit = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userBookmarks = useSelector((state) => state.post.userBookmarks);
  const encodedToken = useSelector((state) => state.auth.encodedToken);
  const username = useSelector((state) => state.auth.userData.username);
  const { content, profileImage, likes } = post;
  const users = useSelector((state) => state.auth.users);
  const [newComment, setNewComment] = useState("");

  function clickRoute() {
    if (username === post.username) {
      navigate("/profile");
    } else {
      let routeUser = users.find((user) => user.username === post.username);
      navigate(`/user/${routeUser._id}`);
    }
  }

  function commentUserRoute(commentUsername) {
    if (commentUsername === username) navigate("/profile");
    else {
      const { _id } = users.find((user) => user.username === commentUsername);
      navigate(`/user/${_id}`);
    }
  }

  function showComments() {
    return (
      !!post.comments &&
      post.comments.map((comment) => (
        <Comment comment={comment} commentUserRoute={commentUserRoute} />
      ))
    );
  }

  return (
    <div className="w-full background-clr p-3 my-3 rounded-lg max-w-[560px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={profileImage}
            alt="Profile pic"
            className="rounded-full h-10 w-10 ml-4 mr-2 object-cover cursor-pointer"
            onClick={clickRoute}
          />
          {name && <p className="">{name}</p>}
          <p className="mx-2 cursor-pointer" onClick={clickRoute}>
            @{tag}
          </p>
        </div>
        <div className="flex items-center">
          {edit && (
            <p
              className="cursor-pointer hover:bg-[#11161b] rounded-lg"
              onClick={() => dispatch(setEditPost(post))}>
              <label htmlFor="edit-post" className="btn modal-button border-0">
                <i className="fa-solid fa-pen-to-square"></i>
              </label>
            </p>
          )}
          {edit && (
            <p
              className="cursor-pointer hover:bg-[#11161b] rounded-lg ml-2"
              onClick={() => dispatch(deletePost({ postId: post._id, encodedToken }))}>
              <i className="btn fa-solid fa-trash-can border-0"></i>
            </p>
          )}
        </div>
      </div>
      <p className="px-4">{content}</p>
      <div className="flex my-3">
        <p
          className="mx-2 cursor-pointer"
          onClick={() => {
            post.likes.likedBy.find((item) => item.username === username)
              ? dispatch(removeFromLikedPosts({ postId: post._id, encodedToken }))
              : dispatch(addToLikedPosts({ postId: post._id, encodedToken }));
          }}>
          <i
            className={`${
              post.likes.likedBy.find((item) => item.username === username)
                ? "fa-solid"
                : "fa-regular"
            } fa-heart mx-2`}></i>
          {likes.likeCount}
        </p>
        <p
          className="mx-2 cursor-pointer"
          onClick={() => {
            userBookmarks.find((item) => item._id === post._id)
              ? dispatch(removePostFromBookmark({ postId: post._id, encodedToken }))
              : dispatch(addPostToBookmark({ encodedToken, postId: post._id }));
          }}>
          <i
            className={`${
              userBookmarks.find((item) => item._id === post._id) ? "fa-solid" : "fa-regular"
            } fa-bookmark mx-2`}></i>
        </p>
      </div>
      <div className=" rounded-lg px-3 py-2 flex items-center border-0 bg-[#11161b]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered grow h-auto border-0 rounded-lg px-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <i
          className="fa-solid fa-paper-plane cursor-pointer"
          onClick={() => {
            dispatch(
              commentOnPost({
                postId: post._id,
                newComment,
                encodedToken,
                profileImage: post.profileImage,
              }),
            );
            setNewComment("");
          }}></i>
      </div>
      <div>
        {/* {!!post.comments &&
          post.comments.map((comment) => (
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
          ))} */}
        {/* {!!post.comments &&
          post.comments.map((comment) => (
            <Comment comment={comment} commentUserRoute={commentUserRoute} />
          ))} */}
        {showComments()}
      </div>
    </div>
  );
}

export { Post };
