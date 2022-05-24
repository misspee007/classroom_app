import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "../../stylesheets/admin.css";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <section className="admin">
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
};

export default Admin;
