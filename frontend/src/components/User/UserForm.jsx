import React, { useState } from "react";
import "./UserForm.css";
import profile from "../../assets/profile.png";
import Header from "./Header";
import USER_API from "../../api/user";
import { useNavigate } from "react-router-dom";
import { formatDateToISO } from "../../utils/format-date";

const UserForm = ({ isEdit, userData }) => {
  const [user, setUser] = useState(
    isEdit
      ? userData
      : { firstname: "", lastname: "", gender: "", birthdate: "", image: "" }
  );
  const navigate = useNavigate();
  const profileImageHandler = (e) => {
    document.getElementById("profile").click();
    const file = e.target.files[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = () => {
      setUser({ ...user, image: reader.result });
    };
  };
  const cancelHandler = () => {
    if (isEdit) {
      setUser(userData);
    } else {
      setUser({
        firstname: "",
        lastname: "",
        gender: "",
        birthdate: "",
        image: "",
      });
    }
  };
  const saveHandler = async () => {
    if (isEdit) {
      user.birthdate = new Date(user.birthdate).toISOString().split("T")[0];
      console.log(user.birthdate);
      const response = await USER_API.editUser(user);
      if (response.status === 200) {
        alert("Update User Success!");
      }
    } else {
      const response = await USER_API.createUser(user);
      if (response.status === 200) {
        navigate("/");
      }
    }
  };
  const deleteProfileImageHandler = () => {
    setUser({ ...user, image: "" });
  };
  const openFileInput = () => {
    document.getElementById("profile").click();
  };
  console.log(user);
  return (
    <>
      <Header isEdit={isEdit} />
      <div className="form-container">
        <div className="profile">
          <img src={user.image ? user.image : profile}></img>
          <input
            type="file"
            id="profile"
            onChange={profileImageHandler}
            accept="image/*"
            style={{ display: "none" }}
          />
          <label htmlFor="profile">
            <button
              style={{ backgroundColor: "#2e8eff" }}
              onClick={openFileInput}
            >
              Upload Profile Picture
            </button>
          </label>
          <button
            style={{ backgroundColor: "#c00000" }}
            onClick={deleteProfileImageHandler}
          >
            Delete Profile Picture
          </button>
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              defaultValue={isEdit ? userData.firstname : ""}
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              placeholder="Please enter First name"
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              defaultValue={isEdit ? userData.lastname : ""}
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              placeholder="Please enter First name"
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={user.gender || ""}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value="" disabled>
                -- Please select Gender --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="Birthday">Birthday</label>
            <input
              id="Birthday"
              type="date"
              defaultValue={isEdit ? formatDateToISO(userData.birthdate) : ""}
              onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
              value={formatDateToISO(user.birthdate)}
            ></input>
          </div>
          <div className="action-button">
            <button
              style={{ backgroundColor: "#7f7f7f" }}
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button
              style={{ backgroundColor: "#00b050" }}
              onClick={saveHandler}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
