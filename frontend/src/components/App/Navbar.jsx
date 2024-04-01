import React from 'react'
import "./Navbar.css"
import profile from "../../assets/profile.png"
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <Link to={"/"}><h1>User Management</h1></Link>
      <img src={profile}></img>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar