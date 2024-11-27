import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
       Have a IDEA to SHARE?
        <br className="max-w:hidden" />
        <span className="orange_gradient text-center">Share It HERE</span>
      </h1>

      <p className="desc text-center">If u think it worth it. SHARE IT</p>

      <Feed />
    </section>
  );
};

export default Home;
