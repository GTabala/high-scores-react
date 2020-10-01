import React from "react";

import "./App.css";
import CountryHeader from "./CountryHeader";
import CountryTable from "./CountryTable";

function HighScoreTable({ name, scores, orderDirection, ind }) {
  return (
    <div className="CountryTable" key={ind}>
      <CountryHeader name={name} />
      <CountryTable scores={scores} orderDirection={orderDirection} />
    </div>
  );
}

export default HighScoreTable;
