import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Workers</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          HS
        </NavLink>
      </li>
    </ul>
  );
};

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="nav-wrapper grey darken-1">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(
  mapStateToProps,
  null
)(Header);
