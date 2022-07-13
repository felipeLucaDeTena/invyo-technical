import React from "react";
import Graph from "react-graph-vis";
import Data from "../../data/data.json";

function GraphComponent({ page }) {
  const graph = {
    nodes: Data.network.nodes,
    edges: Data.network.edges,
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: {
        color: "#e9d02b",
        highlight: "#e9942b",
        hover: "#e9942b",
      },
      arrows: {
        to: {
          scaleFactor: 0,

          type: "circle",
        },
        from: {
          scaleFactor: 0,
          type: "circle",
        },
      },
      width: 1.5,
    },
    nodes: {
      color: {
        border: "#e9d02b",
        background: "#f8f8f8",
        highlight: {
          border: "#e9942b",
          background: "#fff397",
        },
      },
      shape: "dot",
      font: {
        color: "#000000",
        size: 15, // px
        face: "roboto",
        background: "none",
        strokeWidth: 2, // px
        strokeColor: "#ffffff",
        align: "center",
      },
    },
    height: page === "table" ? "0px" : "700px",
  };

  const events = {
    select(event) {
      const { nodes, edges } = event;
    },
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {}}
    />
  );
}
export default GraphComponent;
