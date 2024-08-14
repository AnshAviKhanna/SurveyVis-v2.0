// import * as d3 from "d3";
// import { AxisVertical } from "./AxisVertical";
// // import { Data, Variable } from "./data";

// const MARGIN = { top: 60, right: 40, bottom: 30, left: 60 }; 
// const brush_width = 20;

// const COLORS = [
//   "#e0ac2b",
//   "#e85252",
//   "#6689c6",
//   "#9a6fb0",
//   "#a53253",
//   "#69b3a2",
// ];

// const ParallelCoordinate = ({
//   width,
//   height,
//   data,
//   variables,
//   axisRange,
// }) => {
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;

//   const allGroups = [...new Set(data.map((d) => d.group))];

//   // Compute a xScale: spread all Y axis along the chart width
//   const xScale = d3
//     .scalePoint()
//     .range([0, boundsWidth])
//     .domain(variables)
//     .padding(0);

//   // Compute the yScales: 1 scale per variable
//   // let yScales = {};
//   // variables.forEach((variable) => {
//   //   yScales[variable] = d3
//   //     .scaleLinear()
//   //     .range([boundsHeight, 0])
//   //     .domain([0, 8]);
//   let yScales = {};
// variables.forEach((variable, index) => {
//   const axisMin = axisRange[index][0]; // Assuming axisRange is a 2D array
//   const axisMax = axisRange[index][1];
//   yScales[variable] = d3
//     .scaleLinear()
//     .range([boundsHeight, 0])
//     .domain([axisMin, axisMax]);

//   });

//   // Color Scale
// const colorScale = d3.scaleOrdinal().domain(allGroups).range(COLORS);

//   // Compute lines
// const lineGenerator = d3.line();

// const allLines = data.map((series, i) => {
//   const allCoordinates = variables.map((variable) => {
//     const yScale = yScales[variable];
//     const x = xScale(variable) || 0;
//     // console.log(x)
//     const y = yScale(series[variable]);
//     const coordinate = [x, y];
//     return coordinate;
//   });

//   const d = lineGenerator(allCoordinates);

//   if (!d) {
//     return null;
//   }

//   return <path key={i} d={d} stroke={colorScale(series.group)} fill="none" />;
// });

//   // Compute Axes
//   const allAxes = variables.map((variable, i) => {
    
//     const yScale = yScales[variable];
    
//     return (
//       <g key={i} transform={"translate(" + xScale(variable) + ",0)"}>
//         <AxisVertical yScale={yScale} pixelsPerTick={40} name={variable} />
//       </g>
//     );
//   });

//   return (
//     <svg width={width} height={height}>
//       <g
//         width={boundsWidth}
//         height={boundsHeight}
//         transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
//       >
//         {allLines}
//         {allAxes}
//       </g>
//     </svg>
//   );
// };

// export { ParallelCoordinate };

// import React, { useState } from "react";
// import * as d3 from "d3";
// import { AxisVertical } from "./AxisVertical";

// const MARGIN = { top: 60, right: 40, bottom: 30, left: 60 };

// const COLORS = [
//   "#e0ac2b",
//   "#e85252",
//   "#6689c6",
//   "#9a6fb0",
//   "#a53253",
//   "#69b3a2",
// ];

// const ParallelCoordinate = ({ width, height, data, variables, axisRange }) => {
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;

//   const allGroups = [...new Set(data.map((d) => d.group))];

//   const xScale = d3.scalePoint().range([0, boundsWidth]).domain(variables).padding(0);

//   const yScales = {};
//   variables.forEach((variable, index) => {
//     const axisMin = axisRange[index][0];
//     const axisMax = axisRange[index][1];
//     yScales[variable] = d3.scaleLinear().range([boundsHeight, 0]).domain([axisMin, axisMax]);
//   });

//   const colorScale = d3.scaleOrdinal().domain(allGroups).range(COLORS);

//   const lineGenerator = d3.line();

//   const [selectedRanges, setSelectedRanges] = useState({});

//   const brushHandlers = {};
//   variables.forEach((variable) => {
//     brushHandlers[variable] = d3
//       .brushY()
//       .extent([[xScale(variable) - 10, 0], [xScale(variable) + 10, boundsHeight]])
//       .on("brush", () => handleBrush(variable));
//   });

//   const handleBrush = (variable) => {
//     const selection = d3.event.selection;
//     const yScale = yScales[variable];
//     const selectedDomain = selection.map(yScale.invert).sort((a, b) => a - b);
//     setSelectedRanges((prevRanges) => ({ ...prevRanges, [variable]: selectedDomain }));
//   };

//   const filteredData = data.filter((series) => {
//     return Object.entries(selectedRanges).every(([variable, range]) => {
//       if (!range) return true; // If no range is selected, include all data points
//       const value = series[variable];
//       return value >= range[0] && value <= range[1];
//     });
//   });

//   const allLines = filteredData.map((series, i) => {
//     const allCoordinates = variables.map((variable) => {
//       const yScale = yScales[variable];
//       const x = xScale(variable) || 0;
//       const y = yScale(series[variable]);
//       return [x, y];
//     });

//     const d = lineGenerator(allCoordinates);

//     if (!d) {
//       return null;
//     }

//     return <path key={i} d={d} stroke={colorScale(series.group)} fill="none" />;
//   });

//   const allAxes = variables.map((variable, i) => {
//     const yScale = yScales[variable];

//     return (
//       <g key={i} transform={`translate(${xScale(variable)}, 0)`}>
//         <AxisVertical yScale={yScale} pixelsPerTick={40} name={variable} />
//         <g ref={(node) => d3.select(node).call(brushHandlers[variable])} />
//       </g>
//     );
//   });

//   return (
//     <svg width={width} height={height}>
//       <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
//         {allLines}
//         {allAxes}
//       </g>
//     </svg>
//   );
// };

// export { ParallelCoordinate };


// import React, { useState, useRef, useEffect } from "react";
// import * as d3 from "d3";
// import { AxisVertical } from "./AxisVertical";

// const MARGIN = { top: 60, right: 40, bottom: 30, left: 60 };

// const COLORS = [
//   "#e0ac2b",
//   "#e85252",
//   "#6689c6",
//   "#9a6fb0",
//   "#a53253",
//   "#69b3a2",
// ];

// const ParallelCoordinate = ({ width, height, data, variables, axisRange }) => {
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;

//   const allGroups = [...new Set(data.map((d) => d.group))];

//   const xScale = d3.scalePoint().range([0, boundsWidth]).domain(variables).padding(1);

//   const yScales = {};
//   variables.forEach((variable, index) => {
//     const axisMin = axisRange[index][0];
//     const axisMax = axisRange[index][1];
//     yScales[variable] = d3.scaleLinear().range([boundsHeight, 0]).domain([axisMin, axisMax]);
//   });

//   const colorScale = d3.scaleOrdinal().domain(allGroups).range(COLORS);

//   const lineGenerator = d3.line();

//   const [selectedRanges, setSelectedRanges] = useState({});
//   const brushRefs = useRef({});
//   const brushes = useRef({});

//   const handleBrush = (variable) => {
//     const selection = d3.brushSelection(brushRefs.current[variable]);
//     if (!selection) return;
//     const yScale = yScales[variable];
//     const selectedDomain = selection.map(yScale.invert).sort((a, b) => a - b);
//     setSelectedRanges((prevRanges) => ({ ...prevRanges, [variable]: selectedDomain }));
//   };

//   useEffect(() => {
//     variables.forEach((variable) => {
//       const brush = d3
//         .brushY()
//         .extent([[-10, 0], [10, boundsHeight]])
//         .on("brush end", () => handleBrush(variable));

//       if (brushRefs.current[variable]) {
//         d3.select(brushRefs.current[variable]).call(brush);
//         brushes.current[variable] = brush;
//       }
//     });
//   }, [variables, xScale, boundsHeight]);

//   const filteredData = data.filter((series) => {
//     return Object.entries(selectedRanges).every(([variable, range]) => {
//       if (!range) return true; // If no range is selected, include all data points
//       const value = series[variable];
//       return value >= range[0] && value <= range[1];
//     });
//   });

//   const allLines = filteredData.map((series, i) => {
//     const allCoordinates = variables.map((variable) => {
//       const yScale = yScales[variable];
//       const x = xScale(variable) || 0;
//       const y = yScale(series[variable]);
//       return [x, y];
//     });

//     const d = lineGenerator(allCoordinates);

//     if (!d) {
//       return null;
//     }

//     return <path key={i} d={d} stroke={colorScale(series.group)} fill="none" />;
//   });

//   const allAxes = variables.map((variable, i) => {
//     const yScale = yScales[variable];

//     return (
//       <g key={i} transform={`translate(${xScale(variable)}, 0)`}>
//         <AxisVertical yScale={yScale} pixelsPerTick={40} name={variable} />
//         <g ref={(node) => (brushRefs.current[variable] = node)} />
//       </g>
//     );
//   });

//   return (
//     <svg width={width} height={height}>
//       <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
//         {allLines}
//         {allAxes}
//       </g>
//     </svg>
//   );
// };

// export { ParallelCoordinate };


// import React, { useState, useRef, useEffect } from "react";
// import * as d3 from "d3";
// import { AxisVertical } from "./AxisVertical";

// const MARGIN = { top: 60, right: 40, bottom: 30, left: 60 };

// const COLORS = [
//   "#e0ac2b",
//   "#e85252",
//   "#6689c6",
//   "#9a6fb0",
//   "#a53253",
//   "#69b3a2",
// ];

// const ParallelCoordinate = ({ width, height, data, variables, axisRange }) => {
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;

//   const allGroups = [...new Set(data.map((d) => d.group))];

//   const xScale = d3.scalePoint().range([0, boundsWidth]).domain(variables).padding(0.2);

//   const yScales = {};
//   variables.forEach((variable, index) => {
//     const axisMin = axisRange[index][0];
//     const axisMax = axisRange[index][1];
//     yScales[variable] = d3.scaleLinear().range([boundsHeight, 0]).domain([axisMin, axisMax]);
//   });

//   const colorScale = d3.scaleOrdinal().domain(allGroups).range(COLORS);

//   const lineGenerator = d3.line();

//   const [selectedRanges, setSelectedRanges] = useState({});
//   const brushRefs = useRef({});
//   const brushes = useRef({});

//   const handleBrush = (variable) => {
//     const selection = d3.brushSelection(brushRefs.current[variable]);
//     if (!selection) return;
//     const yScale = yScales[variable];
//     const selectedDomain = selection.map(yScale.invert).sort((a, b) => a - b);
//     setSelectedRanges((prevRanges) => ({ ...prevRanges, [variable]: selectedDomain }));
//   };

//   useEffect(() => {
//     variables.forEach((variable) => {
//       const brush = d3
//         .brushY()
//         .extent([[-10, 0], [10, boundsHeight]])
//         .on("brush end", () => handleBrush(variable));

//       if (brushRefs.current[variable]) {
//         d3.select(brushRefs.current[variable]).call(brush);
//         brushes.current[variable] = brush;
//       }
//     });
//   }, [variables, xScale, boundsHeight]);

//   const filteredData = data.filter((series) => {
//     return Object.entries(selectedRanges).every(([variable, range]) => {
//       if (!range) return true; // If no range is selected, include all data points
//       const value = series[variable];
//       return value >= range[0] && value <= range[1];
//     });
//   });

//   const allLines = filteredData.map((series, i) => {
//     const allCoordinates = variables.map((variable) => {
//       const yScale = yScales[variable];
//       const x = xScale(variable) || 0;
//       const y = yScale(series[variable]);
//       return [x, y];
//     });

//     const d = lineGenerator(allCoordinates);

//     if (!d) {
//       return null;
//     }

//     return <path key={i} d={d} stroke={colorScale(series.group)} fill="none" />;
//   });

//   const allAxes = variables.map((variable, i) => {
//     const yScale = yScales[variable];

//     return (
//       <g key={i} transform={`translate(${xScale(variable)}, 0)`}>
//         <AxisVertical yScale={yScale} pixelsPerTick={40} name={variable} />
//         <g ref={(node) => (brushRefs.current[variable] = node)} />
//       </g>
//     );
//   });

//   return (
//     <svg width={width} height={height}>
//       <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
//         {allLines}
//         {allAxes}
//       </g>
//     </svg>
//   );
// };

// export { ParallelCoordinate };


import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { AxisVertical } from "./AxisVertical";

const MARGIN = { top: 60, right: 40, bottom: 30, left: 60 };

const COLORS = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

const ParallelCoordinate = ({ width, height, data, variables, axisRange }) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = [...new Set(data.map((d) => d.group))];

  const xScale = d3.scalePoint().range([0, boundsWidth]).domain(variables).padding(0.2);

  const yScales = {};
  variables.forEach((variable, index) => {
    const axisMin = axisRange[index][0];
    const axisMax = axisRange[index][1];
    yScales[variable] = d3.scaleLinear().range([boundsHeight, 0]).domain([axisMin, axisMax]);
  });

  const colorScale = d3.scaleOrdinal().domain(allGroups).range(COLORS);

  const lineGenerator = d3.line();

  const [selectedRanges, setSelectedRanges] = useState({});
  const [filteredData, setFilteredData] = useState(data);
  const brushRefs = useRef({});
  const brushes = useRef({});

  const handleBrush = (variable) => {
    const selection = d3.brushSelection(brushRefs.current[variable]);
    if (!selection) return;
    const yScale = yScales[variable];
    const selectedDomain = selection.map(yScale.invert).sort((a, b) => a - b);
    setSelectedRanges((prevRanges) => {
      const newRanges = { ...prevRanges, [variable]: selectedDomain };
      updateFilteredData(newRanges);
      return newRanges;
    });
  };

  const updateFilteredData = (ranges) => {
    const filtered = data.filter((series) => {
      return Object.entries(ranges).every(([variable, range]) => {
        if (!range) return true; // If no range is selected, include all data points
        const value = series[variable];
        return value >= range[0] && value <= range[1];
      });
    });
    setFilteredData(filtered);
    console.log("Filtered data length:", filtered.length);
  };

  useEffect(() => {
    variables.forEach((variable) => {
      const brush = d3
        .brushY()
        .extent([[-10, 0], [10, boundsHeight]])
        .on("brush end", () => handleBrush(variable));

      if (brushRefs.current[variable]) {
        d3.select(brushRefs.current[variable]).call(brush);
        brushes.current[variable] = brush;
      }
    });
  }, [variables, xScale, boundsHeight]);

  const allLines = filteredData.map((series, i) => {
    const allCoordinates = variables.map((variable) => {
      const yScale = yScales[variable];
      const x = xScale(variable) || 0;
      const y = yScale(series[variable]);
      return [x, y];
    });

    const d = lineGenerator(allCoordinates);

    if (!d) {
      return null;
    }

    return <path key={i} d={d} stroke={colorScale(series.group)} fill="none" />;
  });

  const allAxes = variables.map((variable, i) => {
    const yScale = yScales[variable];

    return (
      <g key={i} transform={`translate(${xScale(variable)}, 0)`}>
        <AxisVertical yScale={yScale} pixelsPerTick={40} name={variable} />
        <g ref={(node) => (brushRefs.current[variable] = node)} />
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {allLines}
        {allAxes}
      </g>
    </svg>
  );
};

export { ParallelCoordinate };
