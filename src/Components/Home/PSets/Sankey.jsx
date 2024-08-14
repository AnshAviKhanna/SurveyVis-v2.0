import React, { useState } from "react";
import { sankey, sankeyCenter, sankeyLinkHorizontal } from "d3-sankey";

const Sankey = ({ width, height, data }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // Calculate dynamic margins based on the number of nodes
  const MARGIN_Y = Math.max(25, height / (data.nodes.length + 2));
  const MARGIN_X = Math.max(5, width / (data.nodes.length + 2));

  // Set the sankey diagram properties
  const sankeyGenerator = sankey()
    .nodeWidth(26)
    .nodePadding(MARGIN_Y)
    .extent([
      [MARGIN_X, MARGIN_Y],
      [width - MARGIN_X, height - MARGIN_Y],
    ])
    .nodeId((node) => node.id) // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links
    .nodeAlign(sankeyCenter); // Algorithm used to decide node position

  // Compute nodes and links positions
  const { nodes, links } = sankeyGenerator(data);

  // Draw the nodes
  const allNodes = nodes.map((node) => (
    <g key={node.index}>
      <rect
        height={node.y1 - node.y0}
        width={sankeyGenerator.nodeWidth()}
        x={node.x0}
        y={node.y0}
        stroke={"black"}
        fill="#a53253"
        fillOpacity={0.8}
        rx={0.9}
      >
        <title>{`ID: ${node.id}`}</title>
      </rect>
      <text
        x={node.x0 + sankeyGenerator.nodeWidth() / 2}
        y={(node.y0 + node.y1) / 2}
        textAnchor="middle"
        fill="#000"
        fontSize="10px"
      >
        {node.id}
      </text>
    </g>
  ));

  // Draw the links
  const allLinks = links.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal();
    const path = linkGenerator(link);

    // Calculate the mid-point of the path for placing the text
    const midPointX = (link.source.x1 + link.target.x0) / 2;
    const midPointY = (link.y0 + link.y1) / 2;

    return (
      <g
        key={i}
        onMouseEnter={() => setHoveredLink(i)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <path
          d={path}
          stroke="#a53253"
          fill="none"
          strokeOpacity={0.1}
          strokeWidth={link.width}
        />
        {hoveredLink === i && (
          <text
            x={midPointX}
            y={midPointY}
            textAnchor="middle"
            fill="#000"
            fontSize="10px"
          >
            {link.value}
          </text>
        )}
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allNodes}
        {allLinks}
      </svg>
    </div>
  );
};

export default Sankey;
