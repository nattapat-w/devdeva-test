import React, { useEffect, useState } from "react";

import Header from "../components/Home/Header";
import UsersTable from "../components/Home/UsersTable/UsersTable";
import USER_API from "../api/user";
const HomePage = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await USER_API.getUsers();
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Header
        setUsers={setUsers}
      />
      <UsersTable users={users}/>
    </>
  );
};

export default HomePage;
