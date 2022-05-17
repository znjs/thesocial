import React from "react";

function Post() {
  return (
    <div className="w-full background-clr p-3 my-3 rounded-lg max-w-[560px] mx-auto">
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Profile pic"
          className="rounded-full h-10 w-10 ml-4 mr-2 object-cover"
        />
        <p className="">Laurel Lance</p>
        <p className="mx-2">@Laurel</p>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illum culpa delectus beatae,
        minus est odio. Repellat quod onsectetur adipisicing elit. Nisi illum culpa delectus beatae,
        minus est odio. Repellat quod
      </p>
      <div className="flex my-3">
        <p className="mx-2 cursor-pointer">
          <i className="fa-solid fa-heart mx-2"></i>Like
        </p>
        <p className="mx-2 cursor-pointer">
          <i className="fa-regular fa-bookmark mx-2"></i>Bookmark
        </p>
      </div>
    </div>
  );
}

export { Post };
