import React from "react";
import { UserTile } from "../UserTile/UserTile";
import "./suggestions.css";

function Suggestion() {
  return (
    <div className=" p-2 suggestions">
      <h2 className="font-semibold text-lg">People You might know:</h2>
      <div className="my-4 ">
        <UserTile />
        <UserTile />
        <UserTile />
      </div>
    </div>
  );
}

export { Suggestion };
