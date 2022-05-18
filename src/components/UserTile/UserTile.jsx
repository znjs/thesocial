import React from "react";

function UserTile() {
  return (
    <>
      <div className="flex items-center justify-between max-w-[260px] my-3">
        <img
          src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Profile pic"
          className="rounded-full h-10 w-10 mx-4 object-cover"
        />
        <p>@Akash_p</p>
        <button className="background-clr py-2 px-3 rounded-full">
          <i className="fa-solid fa-plus"></i> Follow
        </button>
      </div>
    </>
  );
}

export { UserTile };
