import { useEffect, useState } from "react";
import "../../stylesheets/profile.css";

const ProfilePage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));
  }, [data]);

  console.log(data);
  return (
    <div className="profile-wrap">
      <div className="profile">
        <h1>Profile</h1>
        <img src={data.photoURL} alt="user" />
        <div className="profile-details">
          <div>
            <h3>Name:</h3>
            <p>{data.displayName}</p>
          </div>
          <div>
            <h3>Email Address:</h3>
            <p>{data.email}</p>
          </div>
          <div className="address">
            <h3>Address:</h3>
            <address>{data.address}</address>
          </div>
          {/* <div>
            <h3>City:</h3>
            <p>city</p>
          </div>
          <div>
            <h3>State/Province:</h3>
            <p>state</p>
          </div>
          <div>
            <h3>Zip Code:</h3>
            <p>zip</p>
          </div>
          <div>
            <h3>Country:</h3>
            <p>country</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
