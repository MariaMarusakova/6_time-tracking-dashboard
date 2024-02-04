import React from "react";
import headshot from './images/image-jeremy.png';

export default function SideBar({ timeframe, onClick }, props) {
  return (

    <div className="side-bar">
      
      <div className="person-info">
        <img className="headshot" src={headshot} alt="headshot of Jeremy Robson"/>
        <p>Report for</p>
        <h2>Jeremy Robson</h2>
        </div>


      <div className="time-frame">
        <div className={timeframe === 'daily' ? 'side highlight' : 'side'} onClick={onClick} id="daily">Daily</div>
        <div className={timeframe === 'weekly' ? 'side highlight' : 'side'} onClick={onClick} id="weekly">Weekly</div>
        <div className={timeframe === 'monthly' ? 'side highlight' : 'side'} onClick={onClick} id="monthly">Monthly</div>
      </div>

    </div>
  );
};

