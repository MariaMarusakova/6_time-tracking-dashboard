import './App.css';
import { menuData } from "./data";
import TimeTracker from "./TimeTracker";

function App() {

  return (
    <div className="App">

      <div className='activities'>
        {menuData.map((data, index) => {
          return (
            <TimeTracker
              key={index}
              title={data.title}
            />
          );
        })}
      </div>

    </div>
  );
}

export default App;
