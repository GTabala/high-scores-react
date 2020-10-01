import React from "react";

import "./App.css";

function PlayerScore({line, ind}) {
  return (
    <table className="LineTable" key={ind}>
      <tbody>
        <tr key="1">
          <td className="Name">{line.n.toUpperCase()}</td>
          <td className="Score">{line.s}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PlayerScore;
