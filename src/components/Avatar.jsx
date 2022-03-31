import React from 'react';
import avatar from "../images/avatar-michelle.jpg";

function Avatar(props) {
  return (
    <div>
      <img src={avatar} alt="avatar-michelle"/>
      <h4>Michelle Appleton</h4>
      <p>28 Jun 2020</p>
    </div>
  );
}

export default Avatar;