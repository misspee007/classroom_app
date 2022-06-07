import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import "../stylesheets/login.css";

import Button from "./Button";
import student from "../assets/laptop_lady.svg";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;

    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
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
            <h1>Student Login</h1>
            <p>make sure your account is secure</p>
          </div>
          <img
            src={student}
            alt="lady holding graded paper"
            className="login-avatar"
          />
        </div>
        <div className="rt-cont">
          <form onSubmit={handleSignIn}>
            <label>
              <input
                type="text"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                name="email"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
                name="password"
              />
            </label>
            <Button text="Sign In" type="btn btn-rounded-sm btn-sm btn-blue" />
          </form>
          <div className="btm">
            <p className="btm-txt">Don't have an account already?</p>
            <Link to="/register">
              <Button
                text="Register"
                type="btn btn-rounded-sm btn-sm btn-blue"
              />
            </Link>

            <p>Or</p>
            <div onClick={SignInWithGoogleFunc}>
              <Button
                text="Continue with Google"
                type="btn btn-rounded-sm btn-sm btn-blue"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
