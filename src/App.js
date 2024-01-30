import './App.css';
import { menuData } from "./data";
import SideBar from "./SideBar";
import TimeTracker from "./TimeTracker";



function App() {

  return (
    <div className="App">

      <>
        <SideBar />
      </>

      <div className='activities'>
        <div className="activity-row">
          {menuData.map((data, index) => {
            return (
              <>
              <TimeTracker
                  key={index}
                  title={data.title} 
                  timeframe={data.timeframes}/>
              </>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
