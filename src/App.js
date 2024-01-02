import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No tours Left</h2>
        <button className="button-white" onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return(
  <div>
    <Tours removeTour={removeTour} tours={tours}></Tours>
  </div>
  );
};

export default App;
