import Sidebar from "./Sidebar";
import "../../stylesheets/admin.css";
import { Outlet } from "react-router-dom";

const Admin = ({isMobile}) => {
  return (
    <>
      <section className="admin">
        {!isMobile && <Sidebar />}
        <Outlet />
      </section>
    </>
  );
};

export default Admin;
