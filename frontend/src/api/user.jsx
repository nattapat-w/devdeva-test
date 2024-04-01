import axios from "axios";

const USER_API = {
  getUsers: async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getUsersByNameSurname: async (nameSurname) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${nameSurname}`
      );
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createUser: async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users", userData
      );
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  editUser: async (userData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/users/${userData.id}`, userData
      );
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/users/${userId}`
      );
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default USER_API;
