import React from "react";
import PlayerScore from "./PlayerScore";

const CountryTable = ({ scores, orderDirection }) => {
  return (
    <div>
      <div className="ScoreTable">
        {scores
          .sort((a, b) => {
            if (a.s < b.s) {
              return orderDirection ? -1 : 1;
            } else if (a.s > b.s) {
              return orderDirection ? 1 : -1;
            } else {
              if (a.n > b.n) {
                return 1;
              } else if (a.n < b.n) {
                return -1;
              } else {
                return 0;
              }
            }
          })
          .map((score, ind) => (
            <PlayerScore line={score} ind={ind} />
          ))}
      </div>
    </div>
  );
};

export default CountryTable;
