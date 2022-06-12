import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MobileNav, Navbar, Suggestion } from "../../components";
import { fetchUsers } from "../Auth/authSlice";
import "./home.css";
import { fetchUserPosts } from "./postSlice";

function Home() {
  const navigate = useNavigate();
  const encodedToken =
    useSelector((state) => state.auth.encodedToken) || localStorage.getItem("encodedToken");
  const user = useSelector((state) => state.auth.userData);
  const userPosts = useSelector((state) => state.post.userPosts);
  const dispatch = useDispatch();
  const fetchFlag = useSelector((state) => state.post.fetchFlag);
  const loadingAuth = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (!!!encodedToken) {
      navigate("/login");
    }
    dispatch(fetchUsers());
  }, [encodedToken, navigate, dispatch]);

  useEffect(() => {
    dispatch(fetchUserPosts(user.username));
  }, [fetchFlag, dispatch, loadingAuth, user.username]);

  return (
    <div className="bg-[#11161b] text-gray-50 h-screen w-screen flex flex-col">
      <Navbar />
      <div className="w-screen max-w-[1600px] homeContainer flex mx-auto mt-2">
        <div className="w-1/5 p-2 min-w-[200px] sideNav">
          <div className="flex flex-col items-center background-clr py-3 rounded-lg">
            <div className="text-center my-2">
              <img
                src={user.profileImage}
                alt="Profile pic"
                className="rounded-full h-28 w-28 object-cover cursor-pointer"
                onClick={() => navigate("/profile")}
              />
              <p
                onClick={() => navigate("/profile")}
                className="font-semibold text-lg cursor-pointer">
                {user.firstName + " " + user.lastName}
              </p>
              <p onClick={() => navigate("/profile")} className="text-lg italic cursor-pointer">
                @{user?.username?.split("@")[0]}
              </p>
            </div>
            <div className="flex justify-evenly w-full">
              <div className="text-center flex-grow border-r border-slate-50">
                <p className="font-semibold ">{userPosts.length}</p>
                <p>Posts</p>
              </div>
              <div className="text-center flex-grow border-r border-slate-50">
                <p className="font-semibold">{user?.followers?.length}</p>
                <p>Followers</p>
              </div>
              <div className="text-center flex-grow">
                <p className="font-semibold">{user?.following?.length}</p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className="">
            <NavLink
              to="/"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-house"></i> <span> Home</span>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-compass"></i> <span> Explore</span>
            </NavLink>
            <NavLink
              to="/bookmark"
              className={({ isActive }) => {
                let active = isActive ? "background-clr" : "";
                return (
                  " text-lg px-3 py-2 rounded-lg  hover:bg-[#454d50] btn border-0 w-full flex justify-start items-center cursor-pointer my-2 " +
                  active
                );
              }}>
              <i className="mx-4 fa-solid fa-bookmark"></i> <span> Bookmarks</span>
            </NavLink>
            <div className="flex justify-center">
              <label
                htmlFor="my-modal-4"
                className="modal-button border-0 px-4 py-2 rounded-full btn background-clr hover:bg-[#454d50] my-2 text-base">
                <i className="fa-solid fa-plus mx-2"></i>
                Create new Post
              </label>
            </div>
          </div>
        </div>
        <div className="main-container flex-grow p-2">
          <Outlet />
        </div>
        <div className="w-1/5 p-2 suggestionsWrapper">
          <Suggestion />
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export { Home };
