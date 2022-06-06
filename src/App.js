import { createContext, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./App.css";
import data from "./db";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/Dashboard";
import Courses from "./components/admin/Courses";
import CourseDetails from "./components/admin/CourseDetails";
import ProfilePage from "./components/admin/ProfilePage";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

export const DataContext = createContext();

function App() {
  const location = useLocation();

  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  const [isMobile, setIsMobile] = useState(isMobileDevice);
  const [isCustomLayout, setIsCustomLayout] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/register"
    ) {
      setIsCustomLayout(true);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        {isMobile ? <MobileNav isCustomLayout={isCustomLayout} /> : isCustomLayout && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<Admin isMobile={isMobile} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="courses/:id" element={<CourseDetails />} />
          </Route>

          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>

        {isCustomLayout && <Footer />}
      </DataContext.Provider>
    </div>
  );
}

export default App;
