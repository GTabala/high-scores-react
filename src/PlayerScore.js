import React from "react";

import "./App.css";

function PlayerScore({ line }) {
  return (
    <table className="LineTable">
      <tr>
        <td className="Name">{line.n.toUpperCase()}</td>
        <td className="Score">{line.s}</td>
      </tr>
    </table>
  );
}

export default PlayerScore;
