// import { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/sidebar.css";
import Button from "../Button";
const Sidebar = () => {
  // const [highlight, setHighlight] = useState({ left: 0, opacity: 0 });

  // function moveHighlight(e) {
  //   setHighlight({
  //     left: e.nativeEvent.layerX - 150,
  //   });
  // }

  // function removeHighlight(e) {
  //   setHighlight({
  //     opacity: 0,
  //     left: e.nativeEvent.layerX - 150,
  //   });
  // }

  return (
    <nav className="side-menu">
      <Link to="/" className="logo">
        <p>Classroom</p>
      </Link>
      <ul className="sidenav">
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
          <Link to="/">
            <Button text="Log out" type="btn btn-rounded-sm btn-sm btn-green" />
          </Link>
        </li>
        <div></div>
      </ul>
    </nav>
  );
};

export default Sidebar;
