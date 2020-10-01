import React from "react";
import HighScoreTable from "./HighScoreTable";

const AllCountriesTable = ({ allCountriesScores, orderDirection }) => {
  let scoreArray = allCountriesScores
    // .map((item) =>
    //   item.scores.map((playerScore) => {
    //   return playerScore.n += " (" + item.name + ")";
    //   })
    // )
    .reduce((newArr, item) => newArr.concat(item.scores), []);
  console.log(scoreArray);
  return (
    <HighScoreTable
      name="All countries"
      scores={scoreArray}
      orderDirection={orderDirection}
      ind="All"
    />
  );
};

export default AllCountriesTable;
