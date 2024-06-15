import React from "react";
import Menu from "./Menu";
import Header from "./Header";
const Top = () => {
  return (
    <div>
      <div className="z-100  pb-[5vh] ">
        <Menu />
      </div>
      <div className="absolute top-0 right-[5vw]">
        <Header />
      </div>
    </div>
  );
};

export default Top;
