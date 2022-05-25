import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../stylesheets/login.css";

import Button from "./Button";
import student from "../assets/laptop_lady.svg";

// export const UserContext = createContext();

const Login = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
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

  const handleSignInChange = (e) => {
    let value = e.target.value;

    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((res) => {
        // navigate("/login");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/admin/dashboard");
        console.log("signed in user: ", user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  const SignInWithGoogleFunc = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        // localStorage.removeItem("user");
        // localStorage.setItem("user", JSON.stringify(res.user));
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
                onChange={handleSignInChange}
                name="email"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleSignInChange}
                name="password"
              />
            </label>
            <Button text="Sign In" type="btn btn-rounded-sm btn-sm btn-blue" />
          </form>
          <div>Don't have an account already?</div>
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
        </div>
      </section>
    </>
  );
};

export default Login;
