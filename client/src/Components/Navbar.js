import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link
          className="navbar-brand text-success text-uppercase fs-3 pt-2 px-5"
          to="/"
        >
          Crud
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav text-center">
            <div className="d-flex">
              {user && (
                <Link
                  className="nav-link active text-success fs-6 pt-3 pl-5"
                  aria-current="page"
                  to="/"
                >
                  Add Users
                </Link>
              )}
              {user && (
                <Link
                  className="nav-link text-success fs-6 pt-3 px-5"
                  // style={{ marginRight: "50px" }}
                  to="/get"
                >
                  All Users
                </Link>
              )}
            </div>
            {user && (
              <div className="d-flex" style={{ marginLeft: "25rem" }}>
                <span className="text-success text-center pt-3 mr-4">
                  {user.email}
                </span>
                <Link
                  className="nav-link text-success fs-6 pt-3 px-4 border-0"
                  onClick={handleClick}
                >
                  Log out
                </Link>
              </div>
            )}
            {!user && (
              <div
                className="d-flex float-right"
                style={{ marginLeft: "47rem" }}
              >
                <Link
                  className="nav-link text-success fs-6 pt-3 px-3"
                  to="/login"
                >
                  Login
                </Link>
                <Link className="nav-link text-success fs-6 pt-3" to="/signup">
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
