import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { deleteUser, getUsers } from "../Apis/api";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getAllUsers();
    }
  }, [user]);

  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const userDelete = async (id) => {
    await deleteUser(id);

    const oldUsers = [...users];
    const newUsers = oldUsers.filter((user) => user._id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h1 className="m-4 text-success">User Details</h1>
        <table className="table table-borderless text-center">
          <thead className=" text-danger">
            <tr className="m-5">
              {/* <th scope="col">#</th> */}
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Ph #</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider ">
            {users.map((user) => (
              <tr key={user._id}>
                {/* <th scope="row">{user._id}</th> */}
                <td className="text-secondary">{user.firstName}</td>
                <td className="text-secondary">{user.lastName}</td>
                <td className="text-secondary">{user.email}</td>
                <td className="text-secondary">{user.phone}</td>
                <td className="d-flex justify-content-around">
                  <button
                    className="border-0 bg-white"
                    style={{ paddingTop: "0" }}
                    onClick={() => userDelete(user._id)}
                  >
                    <RiDeleteBinLine className="text-danger" />
                  </button>
                  <Link
                    className="border-0 bg-white"
                    style={{ paddingTop: "0" }}
                    to={`/edit/${user._id}`}
                  >
                    <FaRegEdit className="text-success" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetUsers;
