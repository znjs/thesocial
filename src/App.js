import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { PostEditModal, PostModal } from "./components";
import {
  Bookmark,
  Explore,
  Feed,
  Home,
  LikedPost,
  PageNotFound,
  Profile,
  SignIn,
  SignUp,
  SingleUserProfile,
} from "./features";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Feed />} />
          <Route path="/liked" element={<LikedPost />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:userId" element={<SingleUserProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <PostModal />
      <PostEditModal />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
