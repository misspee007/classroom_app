import "../../stylesheets/dashboard.css";
import avatar from "../../assets/male.svg";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <div className="content-wrap">
          <div className="greeting">
            <p>Welcome,</p>
            <h1>Jane Doe</h1>
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
