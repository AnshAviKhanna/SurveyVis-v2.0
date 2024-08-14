import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
// import DropdownCat from '../DropDowns/DropdownCat';
import DropdownCat from './DropdownCat';
import DropdownGroupedCat from './DropdownGroupedCat';
import DropdownNum from './DropdownNum';
const Histogram = () => {
  const svgRef = useRef(null);
  const [data, setData] = useState([]);
  const [nBin, setNBin] = useState(0);

  useEffect(() => {
    // Load data
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv").then((data) => {
      setData(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 30, left: 40 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    
    const x = d3.scaleLinear()
      .domain([0, 1000]) 
      .range([0, width]);
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    
    function update(nBin) {
      
      const histogram = d3.histogram()
        .value(function (d) { return +d.price; }) // I need to give the vector of value
        .domain(x.domain())  // then the domain of the graphic
        .thresholds(x.ticks(nBin)); // then the numbers of bins

     
      const bins = histogram(data);

      // Y axis: initialization
      const y = d3.scaleLinear()
        .domain([0, d3.max(bins, function (d) { return d.length; })])
        .range([height, 0]);
      const yAxis = svg.append("g");

      yAxis
        .transition()
        .duration(1000)
        .call(d3.axisLeft(y));

      // Join the rect with the bins data
      const u = svg.selectAll("rect")
        .data(bins);

      // Manage the existing bars and eventually the new ones:
      u.enter()
        .append("rect")
        .merge(u)
        .transition()
        .duration(1000)
        .attr("x", 1)
        .attr("transform", function (d) { return `translate(${x(d.x0)},${y(d.length)})`; })
        .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
        .attr("height", function (d) { return height - y(d.length); })
        .style("fill", "#69b3a2");

      
      u.exit().remove();
    }

   
    update(nBin);

    // Listen to the input change and update the histogram
    d3.select("#nBin").on("input", function () {
      setNBin(+this.value);
      update(+this.value);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, nBin]);

  return (
    <div>    
      <div className='mx-[30vw] flex justify-between'>
    <DropdownNum/>
    <DropdownCat/>
    {/* <DropdownGroupedCat/> */}
    </div>
    <div id="my_dataviz" ref={svgRef} className='mx-[20vw] flex justify-center mt-12'></div>
      <p className='mx-[20vw] flex justify-center'>
        <label>bins</label>
        <input type="number" min="1" max="100" step="30"  value={nBin === 0 ? '' : nBin}  id="nBin" />
      </p>
    </div>
  );
};

export default Histogram;