import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password, confirmPassword);
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="container my-5 text-center">
        <h1 className="mb-4 text-success">Registration Form</h1>
        <div className="form-group col-md-12">
          <label
            htmlFor="email"
            className="fw-semibold text-secondary mb-2"
            style={{ marginRight: "14rem" }}
          >
            Name:
          </label>
          <input
            type="text"
            className="form-control w-25 mx-auto shadow-sm text-secondary"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label
            htmlFor="email"
            className="fw-semibold text-secondary mb-2 mt-4"
            style={{ marginRight: "14rem" }}
          >
            Email:
          </label>
          <input
            type="email"
            className="form-control w-25 mx-auto shadow-sm text-secondary"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label
            htmlFor="password"
            className="fw-semibold text-secondary mb-2 mt-4"
            style={{ marginRight: "200px" }}
          >
            Password:
          </label>
          <input
            type="password"
            className="form-control w-25 mx-auto shadow-sm text-secondary"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label
            htmlFor="c-password"
            className="fw-semibold text-secondary mb-2 mt-4"
            style={{ marginRight: "140px" }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control w-25 mx-auto shadow-sm text-secondary"
            id="c-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-outline-success shadow mt-5 px-4 fw-semibold"
          disabled={isLoading}
        >
          Register
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
