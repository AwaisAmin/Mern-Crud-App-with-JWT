import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="container my-5 text-center">
        <h1 className="my-5 text-success">Login Form</h1>

        <div className="form-group col-md-12">
          <label
            htmlFor="email"
            className="fw-semibold text-secondary mb-2"
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
            style={{ marginRight: "12rem" }}
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
        <button
          disabled={isLoading}
          className="btn btn-outline-success shadow mt-5 px-4 fw-semibold"
        >
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
