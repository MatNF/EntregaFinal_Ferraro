import React from "react";
import profilePic from "./profileUser.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <img src={profilePic} alt="logo" width="40" height="30" />
    </div>
  );
};

export default ProfilePhoto;
