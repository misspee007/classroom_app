import { getAuth } from "firebase/auth";
import "../../stylesheets/dashboard.css";
import avatar from "../../assets/male.svg";

const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <section className="dashboard">
        <div className="content-wrap">
          <div className="greeting">
            <p>Welcome,</p>
            <h1>{user.displayName ? user.displayName : user.email.split("@")[0]}</h1>
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
