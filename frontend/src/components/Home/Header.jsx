import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.png";
import USER_API from "../../api/user";
const Header = ({ setUsers }) => {
  let searchText = "";
  const handleSearchChange = (e) => {
    searchText = e.target.value.toLowerCase().trim();
  };
  const searchHandlerEnter = async (e) => {
    if (e.key === "Enter") {
      const resposne = await USER_API.getUsersByNameSurname(searchText);
      setUsers(resposne.data);
    }
  };
  const searchHandlerClick = async (e) => {
    const resposne = await USER_API.getUsersByNameSurname(searchText);
    setUsers(resposne.data);
  };
  return (
    <>
      <div className="header">
        <h1>User Lists</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            onKeyDown={searchHandlerEnter}
          ></input>
          <img src={searchIcon} onClick={searchHandlerClick}></img>
        </div>
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
