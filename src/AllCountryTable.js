import React from "react";
import HighScoreTable from "./HighScoreTable";

const AllCountryTable = ({ allCountryScores, orderDirection }) => {
  let scoreArray = allCountryScores
    // .map((item) =>
    //   item.scores.map((playerScore) => {
    //   return playerScore.n += " (" + item.name + ")";
    //   })
    // )
    .reduce((newArr, item) => newArr.concat(item.scores), []);
  console.log(scoreArray);
  return (
    <HighScoreTable
      name="All country"
      scores={scoreArray}
      orderDirection={orderDirection}
      ind="All"
    />
  );
};

export default AllCountryTable;
