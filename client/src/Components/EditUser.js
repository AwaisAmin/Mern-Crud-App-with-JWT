import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { editUser, getUser } from "../Apis/api";
import Navbar from "./Navbar";

const EditUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const inputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const res = await getUser(id);
    setUser(res.data);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/get");
  };

  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <h1 className="text-center m-4 text-success">Edit User</h1>
        <form>
          <div className="mb-3 row">
            <label
              htmlFor="firstName"
              className="col-sm-6 col-form-label fw-semibold text-secondary"
            >
              First Name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control shadow-sm text-secondary"
                id="firstName"
                placeholder="Enter first name"
                name="firstName"
                value={user.firstName}
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="lastName"
              className="col-sm-6 col-form-label fw-semibold text-secondary"
            >
              Last Name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control shadow-sm text-secondary"
                placeholder="Enter last name"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="email"
              className="col-sm-6 col-form-label fw-semibold text-secondary"
            >
              Email:
            </label>
            <div className="col-sm-6">
              <input
                type="email"
                className="form-control shadow-sm text-secondary"
                placeholder="Enter email"
                id="email"
                name="email"
                value={user.email}
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="phone"
              className="col-sm-6 col-form-label fw-semibold text-secondary"
            >
              Phone Number:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control shadow-sm text-secondary"
                placeholder="Enter phone number"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={(e) => inputValue(e)}
              />
            </div>
          </div>
          <button
            className="btn btn-outline-success shadow m-4 px-5 fw-semibold"
            type="button"
            onClick={() => editUserDetails()}
          >
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
