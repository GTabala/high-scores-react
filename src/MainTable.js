import React from 'react';
import allCountryScores from "./Scores.js";
import './App.css';
import HighScoreTable from './HighScoreTable';

function MainTable() {
  return (
    <div className="MainTable">
        <h1>High Scores per Country</h1>
        {allCountryScores.sort((a, b) => {
          if(a.name > b.name){
            return 1;
          } else if(a.name < b.name){
            return -1;
          } else {return 0;}
        }).map(country => <HighScoreTable countryScore={country} />)}
    
    </div>
  );
}

export default MainTable;
