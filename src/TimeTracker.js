import React from "react";

const TimeTracker = (props) => {
  return (
    <div className="activity-type">
      <h1 className="activity-detail">{props.title}</h1>
    </div>
  );
};

export default TimeTracker;