import React from "react";
import headshot from './images/image-jeremy.png';

const SideBar = (props) => {
  return (

    <div className="side-bar">
      
      <div className="person-info">
        <img className="headshot" src={headshot} alt="headshot of Jeremy Robson"/>
        <p>Report for</p>
        <h2>Jeremy Robson</h2>
        </div>


      <div className="time-frame">
        <div className="daily-side">daily</div>
        <div className="weekly-side">weekly</div>
        <div className="monthly-side">monthly</div>
      </div>

    </div>
  );
};

export default SideBar;