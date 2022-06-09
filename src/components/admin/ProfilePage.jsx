import { useState, useEffect } from "react";
// import { getAuth } from "firebase/auth";
import "../../stylesheets/profile.css";
import avatar from "../../assets/unknown_avatar.svg";

const ProfilePage = () => {
  // const auth = getAuth();
  // const user = auth.currentUser;

  const [displayName, setDisplayName] = useState("---");
  const [email, setEmail] = useState("---");
  const [address, setAddress] = useState("---");
  const [src, setSrc] = useState(avatar);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setDisplayName(user.displayName ? user.displayName : user.email.split("@")[0]);
    setEmail(user.email ? user.email : "----");
    setAddress(user.address || "----");
    setSrc(user.src || avatar);
    console.log(user.src);
  }, []);

  return (
    <div className="profile-wrap">
      <div className="profile">
        <h1>Profile</h1>
        <img src={src} alt="user" />
        <div className="profile-details">
          <div>
            <h3>Name:</h3>
            <p>
              {displayName}
            </p>
          </div>
          <div>
            <h3>Email Address:</h3>
            <p>{email}</p>
          </div>
          <div className="address">
            <h3>Address:</h3>
            <address>{address}</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
