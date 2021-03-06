import React, { useState } from "react";
import allCountriesScores from "./Scores.js";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import AllCountriesTable from "./AllCountriesTable.js";

function MainTable() {
  const [orderDirection, setOrderDirection] = useState(0);
  const [buttonText, setButtonText] = useState("Sort from small to great.");

  const changeOrder = () => {
    setOrderDirection(!orderDirection);
    setButtonText(
      !orderDirection
        ? "Sort from great to small."
        : "Sort from small to great."
    );
  };

  return (
    <div className="MainTable">
      <h1>High Scores per Country</h1>
      <button onClick={changeOrder}>{buttonText}</button>
      <AllCountriesTable
        allCountriesScores={allCountriesScores}
        orderDirection={orderDirection}
      />
      {allCountriesScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, ind) => (
          <HighScoreTable
            name={country.name}
            scores={country.scores}
            orderDirection={orderDirection}
            ind={ind}
          />
        ))}
    </div>
  );
}

export default MainTable;
