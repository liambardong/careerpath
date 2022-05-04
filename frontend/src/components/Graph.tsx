import { useRef } from "react";
import { ForceGraph2D} from "react-force-graph";

const N = 30;

const gData = {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1))
      }))
};

const data = {
    nodes: [
      { id: "A", value: 123 },
      { id: "B" },
      { id: "C" },
      { id: "D" },
      { id: "E" },
      { id: "F" }
    ],
    links: [
      { source: "A", target: "B", value: 5 },
      { source: "B", target: "C", value: 5 },
      { source: "C", target: "D", value: 5 },
      { source: "D", target: "E", value: 5 },
      { source: "E", target: "F", value: 5 },
      { source: "C", target: "F", value: 5 }
    ]
  };


    

export default function Graph() {
    console.log(gData);
    
    return <ForceGraph2D
    
        graphData={gData}
        nodeLabel="id"
        linkCurvature="curvature"
        backgroundColor={"rgba(0,0,0,0)"}
        nodeColor={() => "red"}
        linkColor={() => "blue"}
        
        
    

    />;
  }