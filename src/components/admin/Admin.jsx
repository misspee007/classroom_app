import Sidebar from "./Sidebar";
import "../../stylesheets/admin.css";
import { Outlet } from "react-router-dom";

const Admin = ({ isMobile }) => {
  return (
    <>
      <section className="admin">
        {!isMobile && (
          <div className="sidebar">
            <Sidebar />
          </div>
        )}
        <div className="outlet">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Admin;
