import React from "react";
import { ReactComponent as Exercise } from './images/icon-exercise.svg';
import { ReactComponent as Play } from './images/icon-play.svg';
import { ReactComponent as SelfCare } from './images/icon-self-care.svg';
import { ReactComponent as Study } from './images/icon-study.svg';
import { ReactComponent as Work } from './images/icon-work.svg';
import { ReactComponent as Social } from './images/icon-social.svg';

const TimeTracker = (props) => {
  return (
    <>
      <div className={"activity-column " + (props.title || "")}>

        {
          (() => {

            if (props.title === 'Exercise')
              return <div className="icon" style={{ backgroundColor: "var(--Lime-green)" }}><Exercise /></div>
            if (props.title === 'Play')
              return <div className="icon" style={{ backgroundColor: "var(--Soft-blue)" }}><Play /></div>
            if (props.title === 'Self Care')
              return <div className="icon" style={{ backgroundColor: "var(--Soft-orange)" }}><SelfCare /></div>
            if (props.title === 'Study')
              return <div className="icon" style={{ backgroundColor: "var(--Light-red-study)" }}><Study /></div>
            if (props.title === 'Work')
              return <div className="icon" style={{ backgroundColor: "var(--Light-red-work)" }}><Work /></div>
            else return <div className="icon" style={{ backgroundColor: "var(--Violet)" }}><Social /></div>

          })()
        }

          <div className="activity-value title">{props.title}  <span style={{ float: "right" }}>... </span></div>

          <div className="activity-value present daily">{props.timeframe.daily.current}hrs</div>
          <div className="activity-value past daily">Last Week - {props.timeframe.daily.current}hrs</div>

          <div className="activity-value present weekly">{props.timeframe.daily.current}hrs</div>
          <div className="activity-value past weekly">Last Week - {props.timeframe.daily.current}hrs</div>

          <div className="activity-value present monthly">{props.timeframe.daily.current}hrs</div>
          <div className="activity-value past monthly">Last Week - {props.timeframe.daily.current}hrs</div>

        </div>
    </>
  );
};

export default TimeTracker;