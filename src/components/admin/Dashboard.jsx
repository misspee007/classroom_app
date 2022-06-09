import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import "../../stylesheets/dashboard.css";
import avatar from "../../assets/male.svg";

const Dashboard = () => {
  // const user = auth.currentUser;
  const [displayName, setDisplayName] = useState('User');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setDisplayName(user.name || user.email.split("@")[0]);
  }, [])
  

  return (
    <>
      <section className="dashboard">
        <div className="content-wrap">
          <div className="greeting">
            <p>Welcome,</p>
            <h1>{displayName}</h1>
          </div>
          <div className="img-wrap">
            <img
              className="male-avatar"
              src={avatar}
              alt="male person studying"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
