import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../stylesheets/navbar.css"
import Button from "./Button";

const MobileNav = ({isCustomLayout}) => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    hamburgerOpen ? setHamburgerOpen(false) : setHamburgerOpen(true);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleBtnClick = () => {
    if (isCustomLayout) {
      navigate("/login");
    } else {
      handleLogOut()
    }
  }

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <p>Classroom</p>
      </Link>

      <ul className="menu">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/courses">Courses</Link>
        </li>
        <li>
          <Link to="/admin/profile">Profile</Link>
        </li>
        <li>
          <div onClick={handleBtnClick}>
            <Button text={isCustomLayout ? "Sign In" : "Log Out"} type="btn btn-rounded-sm btn-sm btn-green" />
          </div>
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleHamburger}>
        <i className={hamburgerOpen ? "bi bi-x" : "bi bi-list"}></i>
      </div>

      <style jsx="true">{`
       @media screen and (max-width: 768px){
        .menu{
          display: ${hamburgerOpen ? "flex" : "none"};
        }
      `}</style>
    </nav>
  );
};

export default MobileNav;
