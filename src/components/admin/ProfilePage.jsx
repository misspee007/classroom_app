import { getAuth } from "firebase/auth";
import "../../stylesheets/profile.css";
import avatar from "../../assets/unknown_avatar.svg";

const ProfilePage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="profile-wrap">
      <div className="profile">
        <h1>Profile</h1>
        <img src={user.photoURL ? user.photoURL : avatar} alt="user" />
        <div className="profile-details">
            <div>
              <h3>Name:</h3>
              <p>{user.displayName ? user.displayName : user.email.split("@")[0]}</p>
            </div>
          <div>
            <h3>Email Address:</h3>
            <p>{user.email ? user.email : '----'}</p>
          </div>
          <div className="address">
            <h3>Address:</h3>
            <address>{user.address ? user.address : '----'}</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
