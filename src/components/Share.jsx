import React from 'react';
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";


function Share(props) {
  return (
    <div>
      <h3>Share</h3>
      <img src={facebookIcon} alt="share to facebook"/>
      <img src={twitterIcon} alt="share to twitter"/>
      <img src={pinterestIcon} alt="share to pinterest"/>
    </div>
  );
}

export default Share;