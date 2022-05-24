import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../stylesheets/login.css";
import Button from "./Button";
import student from "../assets/laptop_lady.svg";
import { useState } from "react";

const Login = () => {
  const [isValid, setIsValid] = useState(false);

  // const validatePassword = () => {
  //   setIsValid(true);
  //   if (password !== "" && confirmPassword !== "") {
  //     if (password !== confirmPassword) {
  //       setIsValid(false);
  //       setError("Passwords does not match");
  //     }
  //   }
  //   return isValid;
  // };

  // const SignUpWithEmail = (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (validatePassword()) {
  //     // Create a new user with email and password using firebase
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((res) => {
  //         console.log(res.user);
  //       })
  //       .catch((err) => setError(err.message));
  //   }
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // };

  const navigate = useNavigate();

  const SignInWithGoogleFunc = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(res.user));
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
          <form>
            <label>
              <input type="text" placeholder="Enter your email" />
            </label>
            <label>
              <input type="password" placeholder="Enter your password" />
            </label>
            <Button text="Sign In" type="btn btn-rounded-sm btn-sm btn-blue" />

            <div onClick={(e) => SignInWithGoogleFunc(e)}>
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
