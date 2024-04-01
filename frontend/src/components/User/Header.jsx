import React from "react";
import { Link } from "react-router-dom";
const Header = ({ isEdit }) => {
  return (
    <>
      <div className="header">
        {!isEdit && <h1>Create new User</h1>}
        {isEdit && <h1>Edit User Info</h1>}
        <Link to="/createUser">
          <div className="add-button">
            <button>Add +</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
