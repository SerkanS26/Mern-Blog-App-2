import React from "react";
import "./singlepage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

const Singlepage = () => {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Singlepage;
