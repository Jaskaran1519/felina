import React from "react";
import Top from "../_components/Top";
import Footer from "../_components/Footer";

const layout = ({ children }) => {
  return (
    <div className="relative w-full h-auto">
      <Top />
      <div className="mt-[5vh]">
        {children}
        <div className="mt-[5vh]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
