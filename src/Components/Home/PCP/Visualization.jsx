import React, { useEffect } from 'react';
// import * as d3 from 'd3';
// Import CSS file
// import './pcpStyle.css';
const Visualization = ({ data }) => {
    // console.log(data)
    // console.log("data")
  useEffect(() => {
    const features = [
      { name: 'CASEID', range: [10010011002, 369000000000] },
      { name: 'V102', range: [0, 1] },
      { name: 'V106', range: [0, 3] },
      { name: 'V113', range: [0, 1] },
    ];
    const generateChart = (properties, percentages, percentages2) => {
        const graphic = d3.select('#graphic');
        const legend = d3.select('#legend');
      
        graphic.selectAll('*').remove(); // Clear existing bars
        legend.selectAll('*').remove(); // Clear existing legend
      
        properties.forEach(property => {
          const row = graphic.append('div').attr('class', 'row');
          const h6 = row.append('h6').text(property);
      
          const chart = row.append('div').attr('class', 'chart');
      
          // Check if property exists in percentages object
          if (property in percentages) {
            Object.entries(percentages[property]).forEach(([key, value]) => {
              const span = chart.append('span')
                .attr('class', 'block')
                .attr('title', key)
                .style('width', value + '%')
                .text(parseFloat(value).toFixed(2) + '%');
      
              // Check if span is available
              if (span) {
                span.append('title').text(key);
              }
            });
          }
      
          // Check if property exists in percentages2 object
          if (property in percentages2) {
            Object.entries(percentages2[property]).forEach(([key, value], index) => {
              const span = chart.append('span')
                .attr('class', 'block')
                .attr('title', key)
                .style('width', value + '%')
                .style('opacity', 0.7)
                .text(parseFloat(value).toFixed(2) + '%');
      
              // Check if span is available
              if (span) {
                span.append('title').text(key);
              }
            });
          }
        });
      };
      
      // Call the generateChart function
      // Replace the second argument with your data
      function calculatePercentage(data, property) {
        const freqMap = data.reduce((freqMap, item) => {
          const value = item[property];
          freqMap[value] = (freqMap[value] || 0) + 1;
          return freqMap;
        }, {});
      
        const totalCount = Object.values(freqMap).reduce((total, count) => total + count, 0);
        const percentageMap = {};
        for (const value in freqMap) {
          percentageMap[value] = (freqMap[value] / totalCount) * 100;
        }
        return percentageMap;
      }
  
    const width = 800,
      height = 400,
      padding = 28,
      brush_width = 20;
    const filters = {};

    const xScale = d3.scalePoint()
      .domain(features.map(x => x.name))
      .range([padding, width - padding]);

    const yScales = {};
    features.forEach(x => {
      yScales[x.name] = d3.scaleLinear()
        .domain(x.range)
        .range([height - padding, padding]);
    });
    yScales.team = d3.scaleOrdinal()
      .domain(features[0].range)
      .range([height - padding, padding]);

    const yAxis = {};
    d3.entries(yScales).forEach(x => {
      yAxis[x.key] = d3.axisLeft(x.value);
    });

    const brushEventHandler = function (feature) {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom")
        return;

      if (d3.event.selection != null) {
        filters[feature] = d3.event.selection.map(d => yScales[feature].invert(d));
      } else {
        if (feature in filters)
          delete (filters[feature]);
      }
      applyFilters();
    }

    const applyFilters = function () {
      d3.select('g.active').selectAll('path')
        .style('display', d => (selected(d) ? null : 'none'));
    }

    const selected = function (d) {
      const _filters = d3.entries(filters);
      return _filters.every(f => {
        return f.value[1] <= d[f.key] && d[f.key] <= f.value[0];
      });
    }

    const yBrushes = {};
    d3.entries(yScales).forEach(x => {
      let extent = [
        [-(brush_width / 2), padding],
        [brush_width / 2, height - padding]
      ];
      yBrushes[x.key] = d3.brushY()
        .extent(extent)
        .on('brush', () => brushEventHandler(x.key))
        .on('end', () => brushEventHandler(x.key));
    });

    const lineGenerator = d3.line();
    const linePath = function (d) {
      const _data = d3.entries(d).filter(x => x.key != 'player');
      let points = _data.map(x => ([xScale(x.key), yScales[x.key](x.value)]));
      return (lineGenerator(points));
    }

    const pcSvg = d3.select('.parallelCoordinates')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    pcSvg.append('g').attr('class', 'inactive').selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', d => linePath(d));

    pcSvg.append('g').attr('class', 'active').selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', d => linePath(d));

    const featureAxisG = pcSvg.selectAll('g.feature')
      .data(features)
      .enter()
      .append('g')
      .attr('class', 'feature')
      .attr('transform', d => ('translate(' + xScale(d.name) + ',0)'));

    featureAxisG
      .append('g')
      .each(function (d) {
        d3.select(this).call(yAxis[d.name]);
      });

    featureAxisG
      .each(function (d) {
        d3.select(this)
          .append('g')
          .attr('class', 'brush')
          .call(yBrushes[d.name]);
      });

    featureAxisG
      .append("text")
      .attr("text-anchor", "middle")
      .attr('y', padding / 2)
      .text(d => d.name);

    const pcpToBar = function (data, data2) {
      // Your function to convert parallel coordinates to bars goes here
      const percentages = {};
      const categories = {}; // Stores the number of unique values for each property
      const percentages2 = {};
      const categories2 = {}; // Stores the number of unique values for each property
      const properties = ['V102', 'V106', 'V113']; // Add more properties as needed

properties.forEach(property => {
  percentages[property] = calculatePercentage(data, property);
  categories[property] = new Set(data.map(item => item[property])).size;
});
properties.forEach(property2 => {
  percentages2[property2] = calculatePercentage(data2, property2);
  categories2[property2] = new Set(data2.map(item => item[property2])).size;
});
  generateChart(properties, percentages,percentages2);
  // generateChart(properties, percentages2,percentages);

    }

    pcpToBar(data, data); // Initial call with complete data

    return () => {
      // Cleanup D3 stuff here if needed
    };
  }, [data]);

  return (
    <div className="container">
      {/* <div className="parallelCoordinates"> */}
        {/* Content of Parallel Coordinates goes here */}
      {/* </div> */}

      {/* Content from the second file */}
      
      <figure className="parallelCoordinates" style={{ width: '550px' }}>
        <div className="y-axis">
          <h3 style={{
            marginRight: '0px',
            marginLeft: '0px',
            marginTop: '15px',
          }}>Field</h3>
        </div>

        <div className="graphic" id="graphic">
          {/* Content will be generated dynamically here */}
        </div>

        <div className="x-axis">
          <h3>percentage</h3>
          <ul className="legend" id="legend">
            {/* Legend items will be generated dynamically here */}
          </ul>
        </div>
      </figure>
    </div>
  );
};

export default Visualization;
