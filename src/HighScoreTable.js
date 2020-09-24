import React from 'react';

import './App.css';
import PlayerScore from './PlayerScore';

function HighScoreTable({countryScore}) {
  return (
    <div className="CountryTable">
        <h2>High Scores : {countryScore.name}</h2>
        <div className="ScoreTable">
              {countryScore.scores.sort((a, b) => {
                if(a.s < b.s){
                  return 1;
                }else if(a.s > b.s){
                  return -1;
                }else{
                  if(a.n > b.n){
                    return 1;
                  }else if(a.n < b.n){
                    return -1;
                  }else{return 0;}
                }

              }

              ).map(score => <PlayerScore line={score} /> )}
        </div>
      
    
    </div>
  );
}

export default HighScoreTable;