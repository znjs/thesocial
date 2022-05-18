import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Bookmark, Explore, Feed, LikedPost, PostModal } from "./components";
import { Home, Profile, SignIn, SignUp } from "./pages";

function App() {
  return (
    <div className=" ">
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
      </Routes>
      <PostModal />
    </div>
  );
}

export default App;
