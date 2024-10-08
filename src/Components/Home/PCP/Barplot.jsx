import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.2;
export const COLORS = ["#e85252", "#6689c6", "#9a6fb0"];

const Barplot = ({ width, height, data }) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const groups = [...new Set(data.map((d) => d.group))];
  const subGroups = [...new Set(data.map((d) => d.subgroup))];

  // Reformat the dataset
  const stackGenerator = d3
    .stack()
    .keys(subGroups)
    .value((d) => data.filter((item) => item.group === d)[0].value);
  const series = stackGenerator(groups);

  // Find size of the longest bar and group rank.
  // Values are available in the last group of the stack
  const lastStackGroup = series[series.length - 1] || [];
  const groupTotalValues = lastStackGroup.map((group) => {
    const biggest = group[group.length - 1] || 0;
    return { name: group.data, value: biggest };
  });
  const sortedGroupTotalValues = groupTotalValues.sort(
    (a, b) => b.value - a.value
  );
  const maxValue = sortedGroupTotalValues[0].value;

  // Y axis is for groups since the barplot is horizontal
  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groupTotalValues.map((g) => g.name))
      .range([0, boundsHeight])
      .padding(BAR_PADDING);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, maxValue]).range([0, boundsWidth]);
  }, [data, width]);

  // Color Scale
  var colorScale = d3.scaleOrdinal().domain(subGroups).range(COLORS);

//   const rectangles = series.map((subgroup, i) => {
//     return (
//       <g key={i}>
//         {subgroup.map((group, j) => {
//           return (
//             <rect
//               key={j}
//               y={yScale(group.data)}
//               height={yScale.bandwidth()}
//               x={xScale(group[0])}
//               width={xScale(group[1]) - xScale(group[0])}
//               fill={colorScale(subgroup.key)}
//               opacity={0.6}
//             />
//           );
//         })}
//       </g>
//     );
//   });

// const rectangles = series.map((subgroup, i) => {
//     return (
//         <g key={i}>
//             {subgroup.map((group, j) => {
//                 const barHeight = yScale.bandwidth();
//                 const firstBarHeight = barHeight;
//                 const secondBarHeight = barHeight / 2; // Height of the second bar is half of the first bar

//                 return (
//                     <g key={j}>
//                         {/* First Bar */}
//                         <rect
//                             y={yScale(group.data)}
//                             height={firstBarHeight}
//                             x={xScale(group[0])}
//                             width={xScale(group[1]) - xScale(group[0])}
//                             fill={colorScale(subgroup.key)}
//                             opacity={0.6}
//                         />
//                         {/* Second Bar */}
//                         <rect 
//                             y={yScale(group.data) + firstBarHeight} // Positioned below the first bar
//                             height={secondBarHeight}
//                             x={xScale(group[0])}
//                             width={xScale(group[1]) - xScale(group[0])} // Same width as the first bar
//                             fill={colorScale(subgroup.key)}
//                             opacity={0.6}
//                         />
//                     </g>
//                 );
//             })}
//         </g>
//     );
// });

const rectangles = series.map((subgroup, i) => {
    return (
        <g className='mt-8' key={i}>
            {subgroup.map((group, j) => {
                const barHeight = yScale.bandwidth();
                const margin = 1; // Define the bottom margin value
                const firstBarHeight = (4/5)*barHeight;
                const secondBarHeight = 1.5*barHeight / 5; // Height of the second bar is half of the first bar
                
                return (
                    <g key={j}>
                        {/* First Bar */}
                        <g>
                        <rect
                            y={yScale(group.data)}
                            height={firstBarHeight}
                            x={xScale(group[0])}
                            width={xScale(group[1]) - xScale(group[0])}
                            // width={xScale(group[1])}
                            fill={colorScale(subgroup.key)}
                            opacity={0.6}
                        />
                            {/* Tooltip for First Bar */}
                            <title>{`${subgroup.key}: ${group[1] - group[0]}`}</title>
                        {/* </rect> */}
                        </g>
                        {/* Second Bar */}
                        <g>
                        <rect 
                            y={yScale(group.data) + firstBarHeight + margin} // Positioned below the first bar with margin
                            height={secondBarHeight}
                            x={xScale(group[0])}
                            width={xScale(group[1]) - xScale(group[0])} // Same width as the first bar
                            fill={colorScale(subgroup.key)}
                            opacity={0.6}
                        />
                             {/* Tooltip for Second Bar */}
                             <title className="text-black">{`${subgroup.key}: ${group[1] - group[0]}`}</title>
                        {/* </rect> */}
                        </g>
                    </g>
                );
            })}
        </g>
    );
});



  const labels = sortedGroupTotalValues.map((group, i) => {
    const y = yScale(group.name);

    if (!y) {
      return null;
    }

    return (
      <g key={i}>
        <text
          x={xScale(group.value) - 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={12}
          opacity={xScale(group.value) > 90 ? 1 : 0} // hide label if bar is not wide enough
        >
          {group.value}
        </text>
        <text
          x={xScale(0) + 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={12}
        >
          {group.name}
        </text>
      </g>
    );
  });

  const grid = xScale
    .ticks(5)
    .slice(1)
    .map((value, i) => (
      <g key={i}>
        <line
          x1={xScale(value)}
          x2={xScale(value)}
          y1={0}
          y2={boundsHeight}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={xScale(value)}
          y={boundsHeight + 10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={9}
          opacity={0.8}
        >
          {value}
        </text>
      </g>
    ));

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <g>{grid}</g>
          <g>{rectangles}</g>
          <g>{labels}</g>
        </g>
      </svg>
    </div>
  );
};

export {Barplot};
