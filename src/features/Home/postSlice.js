import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { triggerToast } from "../../utils/toastTrigger";
import { followUser } from "../Auth/authSlice";

const initialState = {
  error: "",
  posts: [],
  userPosts: [],
  userBookmarks: [],
  loading: false,
  fetchFlag: false,
  editPost: {},
};

export const fetchPosts = createAsyncThunk("posts/createAsyncThunk", async () => {
  return await axios
    .get("/api/posts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
});

export const fetchUserPosts = createAsyncThunk("posts/fetchUserPosts", async (username) => {
  return await axios
    .get(`/api/posts/user/${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
});

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ postData, encodedToken }) => {
    return await axios
      .post("/api/posts", { postData }, { headers: { authorization: encodedToken } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  },
);

export const editUserPost = createAsyncThunk(
  "posts/editUserPost",
  async ({ postData, postId, encodedToken }) => {
    return await axios
      .post(`/api/posts/edit/${postId}`, { postData }, { headers: { authorization: encodedToken } })
      .then((res) => res.data)
      .catch((err) => err);
  },
);

export const fetchBookmarkPost = createAsyncThunk(
  "posts/fetchBookmarkPost",
  async ({ encodedToken }) => {
    return await axios
      .get("/api/users/bookmark", { headers: { authorization: encodedToken } })
      .then((res) => res.data)
      .catch((err) => err);
  },
);

export const addPostToBookmark = createAsyncThunk(
  "posts/addPostToBookmark",
  async ({ encodedToken, postId }) => {
    return axios
      .post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        },
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  },
);

export const deletePost = createAsyncThunk("posts/deletePost", async ({ postId, encodedToken }) => {
  return await axios
    .delete(`/api/posts/${postId}`, { headers: { authorization: encodedToken } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
});

export const removePostFromBookmark = createAsyncThunk(
  "posts/removePostFromBookmark",
  async ({ postId, encodedToken }) => {
    return await axios
      .post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } },
      )
      .then((res) => res.data)
      .catch((err) => err);
  },
);

export const addToLikedPosts = createAsyncThunk(
  "posts/addToLikedPosts",
  async ({ postId, encodedToken }) => {
    return await axios
      .post(`/api/posts/like/${postId}`, {}, { headers: { authorization: encodedToken } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  },
);

export const removeFromLikedPosts = createAsyncThunk(
  "posts/removeFromLikedPosts",
  async ({ postId, encodedToken }) => {
    return await axios
      .post(`/api/posts/dislike/${postId}`, {}, { headers: { authorization: encodedToken } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  },
);

export const commentOnPost = createAsyncThunk(
  "posts/commentOnPost",
  async ({ postId, encodedToken, newComment, profileImage }) => {
    const commentData = { text: newComment, profileImage };
    return await axios
      .post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: encodedToken } },
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error(err));
  },
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toggleFetchFlag: (state) => {
      state.fetchFlag = !state.fetchFlag;
    },
    setEditPost: (state, action) => {
      state.editPost = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchUserPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.userPosts = action.payload.posts;
    },
    [fetchUserPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createNewPost.pending]: (state) => {
      state.loading = true;
    },
    [createNewPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
      state.posts = action.payload.posts;
      triggerToast("success", "Added new Post");
    },
    [createNewPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [editUserPost.pending]: (state) => {
      state.loading = true;
    },
    [editUserPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
      triggerToast("success", "Post Updated");
    },
    [editUserPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addPostToBookmark.pending]: (state) => {
      state.loading = true;
    },
    [addPostToBookmark.fulfilled]: (state, action) => {
      state.userBookmarks = action.payload.bookmarks;
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
    },
    [addPostToBookmark.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [removePostFromBookmark.pending]: (state) => {
      state.loading = true;
    },
    [removePostFromBookmark.fulfilled]: (state, action) => {
      state.userBookmarks = action.payload.bookmarks;
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
    },
    [removePostFromBookmark.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addToLikedPosts.pending]: (state) => {
      state.loading = true;
    },
    [addToLikedPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
    },
    [addToLikedPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [removeFromLikedPosts.pending]: (state) => {
      state.loading = true;
    },
    [removeFromLikedPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
    },
    [removeFromLikedPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
      triggerToast("success", "Post deleted");
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [commentOnPost.pending]: (state) => {
      state.loading = true;
    },
    [commentOnPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.fetchFlag = !state.fetchFlag;
    },
    [commentOnPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [followUser.fulfilled]: (state) => {
      state.fetchFlag = !state.fetchFlag;
    },
  },
});

export const postReducer = postSlice.reducer;
export const { toggleFetchFlag, setEditPost } = postSlice.actions;
