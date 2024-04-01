import React, { useState } from "react";
import "./UsersTable.css";
import profile from "../../../assets/profile.png";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format-date";
import USER_API from "../../../api/user";
const UsersTable = ({ users }) => {
  const userPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumber = users.length / 4;
  console.log(pageNumber.toFixed(0));
  const startIndex = (currentPage - 1) * userPerPage;
  const endIndex = startIndex + userPerPage;
  const currentUsers = users.slice(startIndex, endIndex);
  const pageChangeHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const deleteUserHandler = async (userId) => {
    console.log(userId);
    const resposne = await USER_API.deleteUser(userId);
    if (resposne.status === 200) {
      window.location.reload();
    }
  };
  return (
    <>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th className="action-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers?.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    src={user.image ? user.image : profile}
                    alt={"profile image"}
                  ></img>
                </td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.gender}</td>
                <td>{formatDate(user.birthdate)}</td>
                <td className="action-column">
                  <div className="action-button">
                    <Link
                      to={"/editUser/" + user.id}
                      state={{ user: user, isEdit: true }}
                    >
                      <button style={{ backgroundColor: "#ffc000" }}>
                        Edit
                      </button>
                    </Link>
                    <button
                      style={{ backgroundColor: "#ff0000" }}
                      onClick={(e) => {
                        deleteUserHandler(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => pageChangeHandler(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          onClick={() => pageChangeHandler(currentPage + 1)}
          disabled={endIndex >= users.length}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default UsersTable;
