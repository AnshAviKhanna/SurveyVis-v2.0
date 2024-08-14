import React from 'react';
import Sankey from './Sankey';
// import SnakyPlot from "./Sankey";


const PSets = () => {
  const data = {
    "nodes": [
        { id: "N1" },
        { id: "N2" },
        { id: "N3" },
        { id: "N4" },
        { id: "N5" }
    ],
    "links": [
        { source: "N1", target: "N3", value: 4 },
        { source: "N2", target: "N3", value: 3 },
        { source: "N2", target: "N5", value: 1 },
        { source: "N3", target: "N4", value: 6 },
        { source: "N3", target: "N5", value: 1 },
    ]

}
    return (
      <>
      {/* <div>Parallel Sets</div> */}
      {/* <PSP/> */}
      <div className="flex justify-center">
      <Sankey data={data} width={700} height={400} />
      </div>
      </>
    );
  };
  
export default PSets;
  