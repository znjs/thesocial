import React from "react";
import notFoundImg from "./404 Error Page not Found with people connecting a plug.gif";

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={notFoundImg} alt="invalid page" className="" />
    </div>
  );
}

export { PageNotFound };
