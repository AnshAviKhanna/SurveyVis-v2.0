// import * as d3 from 'd3';
// import DropdownCat from '../DropDowns/DropdownCat';
// import DropdownCat from './DropdownCat';
// import DropdownNum from './DropdownNum';
// import DropdownGroupedCat from './DropdownGroupedCat';
// import React, { useState } from 'react';
// const Visualization = () => {
//   const svgRef = useRef(null);
//   const [data, setData] = useState([]);
//   const [nBin, setNBin] = useState(0);

//   useEffect(() => {
//     // Load data
//     d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv").then((data) => {
//       setData(data);
//     });

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (data.length === 0) return;

    // Clear previous SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // set the dimensions and margins of the graph
//     const margin = { top: 10, right: 30, bottom: 30, left: 40 };
//     const width = 460 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // append the svg object to the body of the page
//     const svg = d3.select(svgRef.current)
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

    
//     const x = d3.scaleLinear()
//       .domain([0, 1000]) 
//       .range([0, width]);
//     svg.append("g")
//       .attr("transform", `translate(0,${height})`)
//       .call(d3.axisBottom(x));

    
//     function update(nBin) {
      
//       const histogram = d3.histogram()
//         .value(function (d) { return +d.price; }) // I need to give the vector of value
//         .domain(x.domain())  // then the domain of the graphic
//         .thresholds(x.ticks(nBin)); // then the numbers of bins

     
//       const bins = histogram(data);

//       // Y axis: initialization
//       const y = d3.scaleLinear()
//         .domain([0, d3.max(bins, function (d) { return d.length; })])
//         .range([height, 0]);
//       const yAxis = svg.append("g");

//       yAxis
//         .transition()
//         .duration(1000)
//         .call(d3.axisLeft(y));

//       // Join the rect with the bins data
//       const u = svg.selectAll("rect")
//         .data(bins);

//       // Manage the existing bars and eventually the new ones:
//       u.enter()
//         .append("rect")
//         .merge(u)
//         .transition()
//         .duration(1000)
//         .attr("x", 1)
//         .attr("transform", function (d) { return `translate(${x(d.x0)},${y(d.length)})`; })
//         .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
//         .attr("height", function (d) { return height - y(d.length); })
//         .style("fill", "#69b3a2");

      
//       u.exit().remove();
//     }

   
//     update(nBin);

//     // Listen to the input change and update the histogram
//     d3.select("#nBin").on("input", function () {
//       setNBin(+this.value);
//       update(+this.value);
//     });

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data, nBin]);

//   return (
//     <div>    
//       <div className='mx-[20vw] flex justify-between'>
//     <DropdownNum/>
//     <DropdownCat/>
//     <DropdownGroupedCat/>
//     </div>
//     <div id="my_dataviz" ref={svgRef} className='mx-[20vw] flex justify-center mt-12'></div>
//       <p className='mx-[20vw] flex justify-center'>
//         <label>bins</label>
//         <input type="number" min="1" max="100" step="30"  value={nBin === 0 ? '' : nBin}  id="nBin" />
//       </p>
//     </div>
//   );
// };

// export default Visualization;

// src/components/Visualization.js

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 30, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     // Create the x-scale
//     const x = d3.scaleLinear()
//       .domain(d3.extent(data))
//       .nice()
//       .range([0, width]);

//     // Generate the histogram
//     const histogram = d3.histogram()
//       .value(d => d)
//       .domain(x.domain())
//       .thresholds(x.ticks(40)); // Adjust the number of bins here

//     const bins = histogram(data);

//     // Create the y-scale
//     const y = d3.scaleLinear()
//       .domain([0, d3.max(bins, d => d.length)])
//       .nice()
//       .range([height, 0]);

//     // Append the bars
//     svg.selectAll('.bar')
//       .data(bins)
//       .enter().append('rect')
//       .attr('class', 'bar')
//       .attr('x', d => x(d.x0) + 1)
//       .attr('y', d => y(d.length))
//       .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
//       .attr('height', d => height - y(d.length))
//       .attr('fill', 'steelblue');

//     // Add the x-axis
//     svg.append('g')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(x));

//     // Add the y-axis
//     svg.append('g')
//       .call(d3.axisLeft(y));

//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data]);

//   return (
//     <div>
//       <svg ref={svgRef}></svg>

//     </div>
//   );
// };

// export default Visualization;

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visualization = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set dimensions and margins
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Select the SVG element and clear it
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create the x-scale
    const x = d3.scaleLinear()
      .domain(d3.extent(data))
      .nice()
      .range([0, width]);

    // Generate the histogram
    const histogram = d3.histogram()
      .value(d => d)
      .domain(x.domain())
      .thresholds(x.ticks(40)); // Adjust the number of bins here

    const bins = histogram(data);

    // Create the y-scale
    const y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .nice()
      .range([height, 0]);

    // Define a set of 10 pastel colors
    const pastelColors = [
      '#AEC6CF', '#FFB347', '#77DD77', '#F49AC2', '#FF6961',
      '#FDFD96', '#CFCFC4', '#B39EB5', '#FFCC99', '#779ECB'
    ];

    // Append the bars
    svg.selectAll('.bar')
      .data(bins)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.x0) + 1)
      .attr('y', d => y(d.length))
      .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr('height', d => height - y(d.length))
      .attr('fill', (d, i) => pastelColors[i % pastelColors.length])
      .on('mouseover', function(event, d) {
        // Show tooltip
        d3.select(this).append('title')
          .text(d.length);
      })
      .on('mouseout', function(event, d) {
        // Remove tooltip
        d3.select(this).select('title').remove();
      });

    // Add the x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Add the y-axis
    svg.append('g')
      .call(d3.axisLeft(y));

    // Clean up function to remove the previous SVG on component re-render
    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Visualization;



// src/components/Visualization.js

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data, bins }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 30, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//       const color = d3.scaleOrdinal()
//       .domain(bins)
//       .range(d3.schemeCategory10);

//     if (typeof data[0] === 'number') {
//       // Numerical data handling
//       const x = d3.scaleLinear()
//         .domain(d3.extent(data))
//         .nice()
//         .range([0, width]);

//       const histogram = d3.histogram()
//         .value(d => d)
//         .domain(x.domain())
//         .thresholds(bins); // Use the provided bins

//       const binsData = histogram(data);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(binsData, d => d.length)])
//         .nice()
//         .range([height, 0]);

//       svg.selectAll('.bar')
//         .data(binsData)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d.x0) + 1)
//         .attr('y', d => y(d.length))
//         .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
//         .attr('height', d => height - y(d.length))
//         .attr('fill', (d, i) => color(i));

//       svg.append('g')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x));

//       svg.append('g')
//         .call(d3.axisLeft(y));
//     } else {
//       // Categorical data handling
//       const x = d3.scaleBand()
//         .domain(bins)
//         .range([0, width])
//         .padding(0.1);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(bins, b => data.filter(d => d === b).length)])
//         .nice()
//         .range([height, 0]);

//       svg.selectAll('.bar')
//         .data(bins)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d))
//         .attr('y', d => y(data.filter(item => item === d).length))
//         .attr('width', x.bandwidth())
//         .attr('height', d => height - y(data.filter(item => item === d).length))
//         // .attr('fill', 'steelblue');
//         .attr('fill', d => color(d));

//       svg.append('g')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x));

//       svg.append('g')
//         .call(d3.axisLeft(y));
//     }

//     const legend = svg.append('g')
//       .attr('transform', `translate(${width + margin.right - 100},${margin.top})`);

//     bins.forEach((bin, i) => {
//       const legendRow = legend.append('g')
//         .attr('transform', `translate(0, ${i * 20})`);

//       legendRow.append('rect')
//         .attr('width', 10)
//         .attr('height', 10)
//         .attr('fill', color(bin));

//       legendRow.append('text')
//         .attr('x', 20)
//         .attr('y', 10)
//         .attr('text-anchor', 'start')
//         .style('text-transform', 'capitalize')
//         .text(bin);
//     });
//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data, bins]);

//   return (
//     <div>
//               <div className='mx-[20vw] flex justify-between'>
// <DropdownNum/>
//       <DropdownCat/>
//       <DropdownGroupedCat/>
//     </div>
//         <svg ref={svgRef}></svg>

//     </div>
//   );
// };

// export default Visualization;


// src/components/Visualization.js

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data, bins }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 150, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom);

//     // Clear previous content
//     svg.selectAll('*').remove();

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     // Define color scale
//     const color = d3.scaleOrdinal()
//       .domain(bins)
//       .range(d3.schemeCategory10);

//     if (typeof data[0] === 'number') {
//       // Numerical data handling
//       const x = d3.scaleLinear()
//         .domain(d3.extent(data))
//         .nice()
//         .range([0, width]);

//       const histogram = d3.histogram()
//         .value(d => d)
//         .domain(x.domain())
//         .thresholds(bins); // Use the provided bins

//       const binsData = histogram(data);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(binsData, d => d.length)])
//         .nice()
//         .range([height, 0]);

//       g.selectAll('.bar')
//         .data(binsData)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d.x0) + 1)
//         .attr('y', d => y(d.length))
//         .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
//         .attr('height', d => height - y(d.length))
//         .attr('fill', (d, i) => color(i));

//       g.append('g')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x));

//       g.append('g')
//         .call(d3.axisLeft(y));

//       // Add legend for numerical data
//       const legend = svg.append('g')
//         .attr('transform', `translate(${width + margin.left},${margin.top})`);

//       binsData.forEach((bin, i) => {
//         const legendRow = legend.append('g')
//           .attr('transform', `translate(0, ${i * 20})`);

//         legendRow.append('rect')
//           .attr('width', 10)
//           .attr('height', 10)
//           .attr('fill', color(i));

//         legendRow.append('text')
//           .attr('x', 20)
//           .attr('y', 10)
//           .attr('text-anchor', 'start')
//           .text(`${bin.x0.toFixed(1)} - ${bin.x1.toFixed(1)}`);
//       });
//     } else {
//       // Categorical data handling
//       const x = d3.scaleBand()
//         .domain(bins)
//         .range([0, width])
//         .padding(0.1);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(bins, b => data.filter(d => d === b).length)])
//         .nice()
//         .range([height, 0]);

//       g.selectAll('.bar')
//         .data(bins)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d))
//         .attr('y', d => y(data.filter(item => item === d).length))
//         .attr('width', x.bandwidth())
//         .attr('height', d => height - y(data.filter(item => item === d).length))
//         .attr('fill', d => color(d));

//       g.append('g')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x));

//       g.append('g')
//         .call(d3.axisLeft(y));

//       // Add legend for categorical data
//       const legend = svg.append('g')
//         .attr('transform', `translate(${width + margin.left},${margin.top})`);

//       bins.forEach((bin, i) => {
//         const legendRow = legend.append('g')
//           .attr('transform', `translate(0, ${i * 20})`);

//         legendRow.append('rect')
//           .attr('width', 10)
//           .attr('height', 10)
//           .attr('fill', color(bin));

//         legendRow.append('text')
//           .attr('x', 20)
//           .attr('y', 10)
//           .attr('text-anchor', 'start')
//           .style('text-transform', 'capitalize')
//           .text(bin);
//       });
//     }

//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data, bins]);

//   return (
//     <div>
//               <div className='mx-[20vw] flex justify-between'>
// <DropdownNum/>
//       <DropdownCat/>
//       <DropdownGroupedCat/>
//     </div>
//     <svg ref={svgRef}></svg>
//     </div>
//   );
// };

// export default Visualization;



// src/components/Visualization.js

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data, bins }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 150, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom);

//     // Clear previous content
//     svg.selectAll('*').remove();

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//       const COLORS = [
//         // "#e0ac2b",
//         "#3468C0",
//         "#FF9843",
//         "#86A7FC",
//         "#FFDD95",
//         // "#69b3a2",
//       ];
//     // Define color scale
//     const color = d3.scaleOrdinal()
//       .domain(bins)
//       .range(COLORS);

//     if (typeof data[0] === 'number') {
//       // Numerical data handling
//       const x = d3.scaleLinear()
//         .domain([0, d3.max(bins)])
//         // .nice()
//         .range([0, width]);

//       const histogram = d3.histogram()
//         .value(d => d)
//         .domain(x.domain())
//         .thresholds(bins); // Use the provided bins

//       const binsData = histogram(data);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(binsData, d => d.length)])
//         .nice()
//         .range([height, 0]);

//       g.selectAll('.bar')
//         .data(binsData)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d.x0) + 1)
//         .attr('y', d => y(d.length))
//         .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
//         .attr('height', d => height - y(d.length))
//         .attr('fill', (d, i) => color(i));

//       g.append('g')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x));

//       g.append('g')
//         .call(d3.axisLeft(y));

//       // Add legend for numerical data
//       const legend = svg.append('g')
//         .attr('transform', `translate(${width + margin.left},${margin.top})`);

//       binsData.forEach((bin, i) => {
//         const legendRow = legend.append('g')
//           .attr('transform', `translate(0, ${i * 20})`);

//         legendRow.append('rect')
//           .attr('width', 10)
//           .attr('height', 10)
//           .attr('fill', color(i));

//         legendRow.append('text')
//           .attr('x', 20)
//           .attr('y', 10)
//           .attr('text-anchor', 'start')
//           .text(`${bin.x0.toFixed(1)} - ${bin.x1.toFixed(1)}`);
//       });
//     } else {
//       // Categorical data handling
//       const x = d3.scaleBand()
//         .domain(bins)
//         .range([0, width])
//         .padding(0.1);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(bins, b => data.filter(d => d === b).length)])
//         .nice()
//         .range([height, 0]);

//       g.selectAll('.bar')
//         .data(bins)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d))
//         .attr('y', d => y(data.filter(item => item === d).length))
//         .attr('width', x.bandwidth())
//         .attr('height', d => height - y(data.filter(item => item === d).length))
//         .attr('fill', d => color(d));

//       g.append('g')
//         .attr('transform', `translate(0,${height})`)
//         .call(d3.axisBottom(x));

//       g.append('g')
//         .call(d3.axisLeft(y));

//       // Add legend for categorical data
//       const legend = svg.append('g')
//         .attr('transform', `translate(${width + margin.left},${margin.top})`);

//       bins.forEach((bin, i) => {
//         const legendRow = legend.append('g')
//           .attr('transform', `translate(0, ${i * 20})`);

//         legendRow.append('rect')
//           .attr('width', 10)
//           .attr('height', 10)
//           .attr('fill', color(bin));

//         legendRow.append('text')
//           .attr('x', 20)
//           .attr('y', 10)
//           .attr('text-anchor', 'start')
//           .style('text-transform', 'capitalize')
//           .text(bin);
//       });
//     }

//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data, bins]);

//   return (
//     <div>
//               {/* <div className='mx-[20vw] flex justify-between'>

//      </div> */}
//      <svg ref={svgRef}></svg>
//      </div>
//   );
// };

// export default Visualization;

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data, customBins }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 150, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;
//     const binWidth = 2;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom);

//     // Clear previous content
//     svg.selectAll('*').remove();

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     const COLORS = [
//       "#3468C0",
//       "#FF9843",
//       "#86A7FC",
//       "#FFDD95",
//     ];

//     // Define color scale
//     const color = d3.scaleOrdinal()
//       .domain(customBins)
//       .range(COLORS);

//     // Numerical data handling
//     const x = d3.scaleLinear()
//       .domain(d3.extent(data))
//       .nice()
//       .range([0, width]);

//     // Create custom bins using the provided bin values
//     const bins = customBins.map((d, i) => {
//       return {
//         x0: d,
//         x1: d + binWidth,
//       };
//     });

//     // Assign data to the custom bins
//     const binsData = bins.map(bin => {
//       const binData = data.filter(d => d >= bin.x0 && d < bin.x1);
//       return {
//         ...bin,
//         length: binData.length,
//       };
//     });

//     const y = d3.scaleLinear()
//       .domain([0, d3.max(binsData, d => d.length)])
//       .nice()
//       .range([height, 0]);

//     g.selectAll('.bar')
//       .data(binsData)
//       .enter().append('rect')
//       .attr('class', 'bar')
//       .attr('x', d => x(d.x0) + 1)
//       .attr('y', d => y(d.length))
//       .attr('width', x(binWidth) - 1)
//       .attr('height', d => height - y(d.length))
//       .attr('fill', (d, i) => color(i));

//     g.append('g')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(x));

//     g.append('g')
//       .call(d3.axisLeft(y));

//     // Add legend for numerical data
//     const legend = svg.append('g')
//       .attr('transform', `translate(${width + margin.left},${margin.top})`);

//     binsData.forEach((bin, i) => {
//       const legendRow = legend.append('g')
//         .attr('transform', `translate(0, ${i * 20})`);

//       legendRow.append('rect')
//         .attr('width', 10)
//         .attr('height', 10)
//         .attr('fill', color(i));

//       legendRow.append('text')
//         .attr('x', 20)
//         .attr('y', 10)
//         .attr('text-anchor', 'start')
//         .text(`${bin.x0.toFixed(1)} - ${bin.x1.toFixed(1)}`);
//     });

//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data, customBins]);

//   return (
//     <div>
//      <svg ref={svgRef}></svg>
//      </div>
//   );
// };

// export default Visualization;


// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data, bins }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 150, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom);

//     // Clear previous content
//     svg.selectAll('*').remove();

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     const COLORS = [
//       "#3468C0",
//       "#FF9843",
//       "#86A7FC",
//       "#FFDD95",
//     ];

//     // Define color scale
//     const color = d3.scaleOrdinal()
//       .domain(bins)
//       .range(COLORS);

//     if (typeof data[0] === 'number') {
//       // Numerical data handling
//       const histogram = d3.histogram()
//         .value(d => d)
//         .domain([0, d3.max(data)])
//         .thresholds(bins.length);

//       const binsData = histogram(data);

//       // Calculate equal width for each bin
//       const binWidth = width / bins.length;

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(binsData, d => d.length)])
//         .nice()
//         .range([height, 0]);

//       g.selectAll('.bar')
//         .data(binsData)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', (d, i) => i * binWidth)
//         .attr('y', d => y(d.length))
//         .attr('width', binWidth - 1)
//         .attr('height', d => height - y(d.length))
//         .attr('fill', (d, i) => color(i));

//       g.append('g')
//         .call(d3.axisLeft(y));

//       // Add legend for numerical data
//       const legend = svg.append('g')
//         .attr('transform', `translate(${width + margin.left},${margin.top})`);

//       binsData.forEach((bin, i) => {
//         const legendRow = legend.append('g')
//           .attr('transform', `translate(0, ${i * 20})`);

//         legendRow.append('rect')
//           .attr('width', 10)
//           .attr('height', 10)
//           .attr('fill', color(i));

//         legendRow.append('text')
//           .attr('x', 20)
//           .attr('y', 10)
//           .attr('text-anchor', 'start')
//           .text(`${bin.x0.toFixed(1)} - ${bin.x1.toFixed(1)}`);
//       });
//     } else {
//       // Categorical data handling
//       const x = d3.scaleBand()
//         .domain(bins)
//         // .nice()
//         .range([0, width])
//         .padding(0.1);

//       const y = d3.scaleLinear()
//         .domain([0, d3.max(bins, b => data.filter(d => d === b).length)])
//         .nice()
//         .range([height, 0]);

//       g.selectAll('.bar')
//         .data(bins)
//         .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => x(d))
//         .attr('y', d => y(data.filter(item => item === d).length))
//         .attr('width', x.bandwidth())
//         .attr('height', d => height - y(data.filter(item => item === d).length))
//         .attr('fill', d => color(d));

//       g.append('g')
//         .call(d3.axisLeft(y));

//       // Add legend for categorical data
//       const legend = svg.append('g')
//         .attr('transform', `translate(${width + margin.left},${margin.top})`);

//       bins.forEach((bin, i) => {
//         const legendRow = legend.append('g')
//           .attr('transform', `translate(0, ${i * 20})`);

//         legendRow.append('rect')
//           .attr('width', 10)
//           .attr('height', 10)
//           .attr('fill', color(bin));

//         legendRow.append('text')
//           .attr('x', 20)
//           .attr('y', 10)
//           .attr('text-anchor', 'start')
//           .style('text-transform', 'capitalize')
//           .text(bin);
//       });
//     }

//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data, bins]);

//   return (
//     <div>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// };

// export default Visualization;


// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Visualization = ({ data, binRanges }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     // Set dimensions and margins
//     const margin = { top: 20, right: 150, bottom: 40, left: 40 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Select the SVG element and clear it
//     const svg = d3.select(svgRef.current)
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom);

//     // Clear previous content
//     svg.selectAll('*').remove();

//     const g = svg.append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     const COLORS = [
//       "#3468C0",
//       "#FF9843",
//       "#86A7FC",
//       "#FFDD95",
//     ];

//     // Define color scale
//     const color = d3.scaleOrdinal()
//       .domain(binRanges.map((_, i) => i))
//       .range(COLORS);

//     // Numerical data handling
//     const histogram = d3.histogram()
//       .value(d => d)
//       .domain([0, d3.max(data)])
//       .thresholds(binRanges.map(bin => bin[0])); // Use the start values of the bins as thresholds

//     const binsData = histogram(data).filter((bin, i) => {
//       // Filter bins to include only those in the specified ranges
//       return binRanges.some(range => bin.x0 >= range[0] && bin.x1 <= range[1]);
//     });

//     // Calculate equal width for each bin
//     const binWidth = width / binRanges.length;

//     const y = d3.scaleLinear()
//       .domain([0, d3.max(binsData, d => d.length)])
//       .nice()
//       .range([height, 0]);

//     g.selectAll('.bar')
//       .data(binsData)
//       .enter().append('rect')
//       .attr('class', 'bar')
//       .attr('x', (d, i) => i * binWidth)
//       .attr('y', d => y(d.length))
//       .attr('width', binWidth - 1)
//       .attr('height', d => height - y(d.length))
//       .attr('fill', (d, i) => color(i));

//     // Add x-axis line without numerical values
//     g.append('g')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(d3.scaleLinear().range([0, width])).tickFormat(''));

//     g.append('g')
//       .call(d3.axisLeft(y));

//     // Add legend for numerical data
//     const legend = svg.append('g')
//       .attr('transform', `translate(${width + margin.left},${margin.top})`);

//     binRanges.forEach((range, i) => {
//       const legendRow = legend.append('g')
//         .attr('transform', `translate(0, ${i * 20})`);

//       legendRow.append('rect')
//         .attr('width', 10)
//         .attr('height', 10)
//         .attr('fill', color(i));

//       legendRow.append('text')
//         .attr('x', 20)
//         .attr('y', 10)
//         .attr('text-anchor', 'start')
//         .text(`${range[0].toFixed(1)} - ${range[1].toFixed(1)}`);
//     });

//     // Clean up function to remove the previous SVG on component re-render
//     return () => {
//       d3.select(svgRef.current).selectAll('*').remove();
//     };
//   }, [data, binRanges]);

//   return (
//     <div>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// };

// export default Visualization;
