import axios from "axios";

const baseURL = "http://localhost:4500";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : null
    }`,
  },
});

export const getUsers = async () => {
  try {
    return await axiosInstance.get(`/all`);
  } catch (error) {
    console.log("Error while calling get all user api", error);
  }
};

export const addUser = async (data) => {
  try {
    return await axiosInstance.post(`/add`, data);
  } catch (error) {
    console.log("Error while calling add user api", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axiosInstance.get(`/${id}`);
  } catch (error) {
    console.log("Error while calling single user api", error);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axiosInstance.put(`/${id}`, user);
  } catch (error) {
    console.log("Error while calling edit user api", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axiosInstance.delete(`/${id}`);
  } catch (error) {
    console.log("Error while calling delete user api", error);
  }
};
