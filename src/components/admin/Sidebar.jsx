import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "../../stylesheets/sidebar.css";
import Button from "../Button";

const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

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
          <Link onClick={handleLogOut}>
            <Button text="Log out" type="btn btn-rounded-sm btn-sm btn-green" />
          </Link>
        </li>
        <div></div>
      </ul>
    </nav>
  );
};

export default Sidebar;
