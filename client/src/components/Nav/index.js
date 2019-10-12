import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        React Reading List
      </Link>
      <Link className="navbar-brand" to="/kasdkugasdiasgudasyjgdasuyfas">
        No Match
      </Link>
    </nav>
  );
}

export default Nav;
