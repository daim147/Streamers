import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../Google Auth/GoogleAuth";
const Header = () => {
  return (
    <div className="ui pointing secondary menu">
      <Link to="/" className="item">
        Streamy
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
