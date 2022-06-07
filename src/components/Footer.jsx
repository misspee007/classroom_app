import "../stylesheets/footer.css";
import { Link } from "react-router-dom";
import Button from "./Button";
// import logoWhite from "../assets/images/logoWhite.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <Link to="/" className="logo">
          <p>Classroom</p>
        </Link>
        <Link to="/login">
          <Button text="Get Started" type="btn btn-rounded btn-rg btn-green" />
        </Link>
      </div>
      <div className="socials">
        <a href="www.facebook.com" target="_blank">
          <i className="bi bi-facebook" aria-label="Facebook"></i>
        </a>
        <a href="www.twitter.com" target="_blank">
          <i className="bi bi-twitter" aria-label="Twitter"></i>
        </a>
        <a href="www.pinterest.com" target="_blank">
          <i className="bi bi-pinterest" aria-label="Pinterest"></i>
        </a>
        <a href="www.instagram.com" target="_blank">
          <i className="bi bi-instagram" aria-label="Instagram"></i>
        </a>
      </div>
      <div className="attribution">
        <a href="https://github.com/misspee007">PDA</a> &copy;{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
