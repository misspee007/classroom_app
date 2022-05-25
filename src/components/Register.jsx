import {
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import "../stylesheets/login.css";

import Button from "./Button";
import student from "../assets/laptop_lady.svg";

const Register = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;

    setNewUser({
      ...newUser,
      [e.target.name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignInWithGoogleFunc = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="login-page">
        <div className="left-cont">
          <div className="txt">
            <h1>Sign Up</h1>
            <p>make sure your account is secure</p>
          </div>
          <img
            src={student}
            alt="lady holding graded paper"
            className="login-avatar"
          />
        </div>
        <div className="rt-cont">
          <form onSubmit={handleSignup}>
            <label>
              <input
                type="text"
                placeholder="Enter your email"
                value={newUser.email}
                onChange={handleChange}
                name="email"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Enter your password"
                value={newUser.password}
                onChange={handleChange}
                name="password"
              />
            </label>
            <Button text="Register" type="btn btn-rounded-sm btn-sm btn-blue" />
            <div>Or</div>
            <div onClick={SignInWithGoogleFunc}>
              <Button
                text="Continue with Google"
                type="btn btn-rounded-sm btn-sm btn-blue"
              />
            </div>
          </form>
          <div>Have an account already?</div>
          <Link to="/login">
            <Button text="Sign In" type="btn btn-rounded-sm btn-sm btn-blue" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Register;
