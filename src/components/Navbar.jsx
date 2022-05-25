import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <p>CLASSROOM</p>
      </Link>

      <Link to="/login">
        <Button text="Sign In" type="btn btn-rounded-sm btn-sm btn-green" />
      </Link>

    </nav>
  );
};

export default Navbar;
