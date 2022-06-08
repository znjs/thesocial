import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  encodedToken: localStorage.getItem("encodedToken") || "",
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  error: "",
  users: [],
};

export const signIn = createAsyncThunk("auth/signIn", async ({ username, password, navigate }) => {
  return await axios
    .post("/api/auth/login", {
      username,
      password,
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("encodedToken", res.data.encodedToken);
      }
      return res.data;
    })
    .catch((err) => err);
});

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, password, firstName, lastName, navigate }) => {
    return await axios
      .post("/api/auth/signup", {
        username,
        password,
        firstName,
        lastName,
      })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("encodedToken", res.data.encodedToken);
        }
        return res.data;
      })
      .catch((err) => err);
  },
);

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
  return await axios
    .get("/api/users")
    .then((res) => res.data)
    .catch((err) => err);
});

export const followUser = createAsyncThunk("auth/followUser", async ({ userId, encodedToken }) => {
  return await axios
    .post(`/api/users/follow/${userId}`, {}, { headers: { authorization: encodedToken } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
});

export const unFollowUser = createAsyncThunk(
  "auth/unFollowUser",
  async ({ userId, encodedToken }) => {
    return await axios
      .post(`/api/users/unfollow/${userId}`, {}, { headers: { authorization: encodedToken } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  },
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ encodedToken, data }) => {
    try {
      const res = await axios.post(
        "/api/users/edit",
        { userData: data },
        { headers: { authorization: encodedToken } },
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.encodedToken = "";
      state.userData = {};
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("userData");
      action.payload.navigate("/login");
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.encodedToken = action.payload.encodedToken;
      state.userData = action.payload.foundUser;
      localStorage.setItem("userData", JSON.stringify(action.payload.foundUser));
      state.loading = false;
    },
    [signIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.createdUser;
      localStorage.setItem("userData", JSON.stringify(action.payload.createdUser));
      state.encodedToken = action.payload.encodedToken;
    },
    [signUp.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [followUser.pending]: (state) => {
      state.loading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [unFollowUser.pending]: (state) => {
      state.loading = true;
    },
    [unFollowUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
    },
    [unFollowUser.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [updateProfile.pending]: (state) => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
    },
    [updateProfile.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
