import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Body from "./body/body";

const Main = () => {
  return (
    <div className="min-h-screen">
      <div className="mt-[32px] mx-[52px]">
        <Header />
      </div>
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
