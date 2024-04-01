import React from "react";
import UserForm from "../components/User/UserForm";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const UserPage = () => {

  const { id } = useParams();
  const location = useLocation();
  const { user = {}, isEdit } = location.state ?? {};
  
  return (
    <>
      {!id && <UserForm isEdit={isEdit}/>}
      {id && <UserForm isEdit={isEdit} userId={id} userData={user}/>}
    </>
  );
};

export default UserPage;
