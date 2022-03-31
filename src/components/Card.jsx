import React, { useState } from 'react';
import Avatar from './Avatar';
import Share from './Share';
import drawers from "../images/drawers.jpg";
import shareIcon from "../images/icon-share.svg";

function Card(props) {
  const [shareVisible, setShareVisible] = useState(false);

  const handleClick = () => {
    setShareVisible(prevState => {
      return !prevState;
    });
  }

  return (
    <div className="App-header">
      <img src={drawers} alt="drawer"/>
      <h1>
        Shift the overall look and feel by adding these wonderful 
        touches to furniture in your home
      </h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps 
        it felt slightly bare and uninviting. I’ve got some simple tips 
        to help you make any room feel complete.
      </p>
      <div>
        {shareVisible? <Share/> : <Avatar/>}
        <button className='' onClick={handleClick}>
          <img src={shareIcon} alt="share"/>
        </button>
      </div>
  </div>
  );
}

export default Card;