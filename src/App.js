import './App.css';
import { menuData } from "./data";
import SideBar from "./SideBar";
import TimeTracker from "./TimeTracker";
import { useState } from "react";

function App() {


  const [timeFrame, setTimeframe] = useState("daily");
  const handleClick = (event) => {
    setTimeframe(event.currentTarget.id);
  }

  return (
    <div className="App">

      <>
        <SideBar onClick={handleClick} timeframe={timeFrame}/>
      </>

      <div className='activities'>
        <div className="activity-row">
          {menuData.map((data, index) => {
            return (
              <>
              <TimeTracker
                  key={index}
                  title={data.title} 
                  timeframe={timeFrame}
                  hours={data.timeframes}/>
              </>
            );
          })}
        </div>
      </div>

    </div>

  );

}

export default App;
