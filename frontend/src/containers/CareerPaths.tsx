import React, { StrictMode } from "react";
import Graph from "../components/Graph";

function CareerPaths() {
  return (
    <><div className="Home">
      <div className="lander">
        <h1>Career Paths Visualizer Page</h1>
        <p className="text-muted">Find your path</p>

      </div>



      </div>
    
    
      <StrictMode>
        <Graph />
      </StrictMode>
      
    </>
  );
}

export default CareerPaths;