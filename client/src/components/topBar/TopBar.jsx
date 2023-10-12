import React, { useContext } from "react";
import "./topbar.css";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  // const PF = "http://localhost:5000/images/";
  const PF = "https://mern-blog-app-2.up.railway.app/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const activeLink = ({ isActive }) => (isActive ? "navLink" : "link");

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/" className={activeLink}>
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/about" className={activeLink}>
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/contact" className={activeLink}>
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/write" className={activeLink}>
              WRITE
            </NavLink>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to={"/settings"}>
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navLinkAuth" : "link"
                }
                to="/login"
              >
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navLinkAuth" : "link"
                }
                to="/register"
              >
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
