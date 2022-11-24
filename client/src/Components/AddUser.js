import React, { useState } from "react";
import GetUsers from "./GetUsers";
import { addUser, getUser, getUsers } from "../Apis/api";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

const AddUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { user: authUser } = useAuthContext();
  const navigate = useNavigate();

  const inputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUser = async () => {
    if (authUser) {
      await addUser(user);
    }
    navigate("/get");
  };

  return (
    <div>
      <Navbar />
      <div className="container text-center w-75">
        <h1 className="text-center m-5 text-success">Crud App</h1>
        <form>
          <div className="mb-3 row">
            <label
              htmlFor="firstName"
              className="col-sm-5 col-form-label fw-semibold text-secondary"
            >
              First Name:
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control shadow-sm text-secondary"
                id="firstName"
                placeholder="Enter first name"
                name="firstName"
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="lastName"
              className="col-sm-5 col-form-label fw-semibold text-secondary"
            >
              Last Name:
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control shadow-sm text-secondary"
                placeholder="Enter last name"
                id="lastName"
                name="lastName"
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="email"
              className="col-sm-5 col-form-label fw-semibold text-secondary"
            >
              Email:
            </label>
            <div className="col-sm-7">
              <input
                type="email"
                className="form-control shadow-sm text-secondary"
                placeholder="Enter email"
                id="email"
                name="email"
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="phone"
              className="col-sm-5 col-form-label fw-semibold text-secondary"
            >
              Phone Number:
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control shadow-sm text-secondary"
                placeholder="Enter phone number"
                id="phone"
                name="phone"
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <button
            className="btn btn-outline-success shadow m-5 px-5 fw-semibold"
            type="button"
            onClick={() => AddUser()}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
