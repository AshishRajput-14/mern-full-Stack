import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2 bg-primary text-light">
        <h3>My Website</h3>
        <div className="d-flex gap-3">
          <Link to={"/"} className="bg-amber-400"> <FaHome /> Home</Link>
          <Link to={"/about"} className="bg-amber-400">About</Link>
          <Link to={"/product"} className="bg-amber-400">Product</Link>
          <Link to={"/contact"} className="">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;