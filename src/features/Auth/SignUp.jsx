import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { signUp } from "./authSlice";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const dispatch = useDispatch();
  const encodedToken =
    useSelector((state) => state.auth.encodedToken) || localStorage.getItem("encodedToken");

  useEffect(() => {
    if (!!encodedToken) navigate("/");
  }, [encodedToken]);

  return (
    <div className="flex h-screen w-screen bg-slate-800 text-center">
      <div className="flex justify-center items-center flex-grow min-w-fit">
        <div className="flex flex-col justify-center items-center authCard h-full w-full">
          <div className="backdrop-opacity-25 rounded-lg max-w-[350px]  text-gray-900 md:text-gray-50">
            <div className="py-4 flex items-center justify-center">
              <img src={logo} alt="logo" className="h-20 mx-auto" />
              <h2 className="text-gray-900 md:text-gray-50 ff-nickainley text-4xl mx-2">
                The social
              </h2>
            </div>

            <h2 className=" text-2xl my-3">Sign Up</h2>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="firstName">
                FirstName:
              </label>
              <input
                value={user.firstName}
                onChange={(e) => setUser((prev) => ({ ...prev, firstName: e.target.value }))}
                type="text"
                name="fullName"
                placeholder="John Doe"
                autoComplete="off"
                className=" text-center bg-black py-3 my-4 border hover: border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="fullName">
                LastName:
              </label>
              <input
                value={user.lastName}
                onChange={(e) => setUser((prev) => ({ ...prev, lastName: e.target.value }))}
                type="text"
                name="fullName"
                placeholder="John Doe"
                autoComplete="off"
                className=" text-center bg-black py-3 my-4 border hover: border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="email">
                Email:
              </label>
              <input
                value={user.email}
                onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                autoComplete="off"
                className=" text-center bg-black py-3 my-4 border hover: border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="password">
                Password:
              </label>
              <input
                value={user.password}
                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                type="password"
                name="password"
                placeholder="password . . ."
                className=" text-center bg-black py-3 my-4 border hover: border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                if (!!user.email && !!user.password && user.lastName && user.firstName)
                  dispatch(
                    signUp({
                      username: user.email,
                      password: user.password,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      navigate,
                    }),
                  );
              }}
              className={`text-center w-full py-4 bg-sky-500 hover:bg-sky-400 rounded-md ${
                !!user.email && !!user.password && !!user.firstName && !!user.lastName
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }  `}>
              SIGN UP
            </button>
            <p
              onClick={() => navigate("/login")}
              className="text-sm font-sans font-medium text-gray-400 underline select-none cursor-pointer">
              Already have an Account? Sign up
            </p>
          </div>
        </div>
      </div>
      <div className="md:block md:basis-1/3 hidden flex-grow authImg"></div>
    </div>
  );
}

export { SignUp };
