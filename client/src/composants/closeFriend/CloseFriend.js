import React from "react";
import "./closeFriend.css";

const CloseFriend = ({user}) => {
  const PF = "http://localhost:5000/images/";
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
