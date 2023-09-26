/** @format */

import React, { useState } from "react";
import NumberCard from "./NumberCard";
import styles from "./GamePlay.module.css";
import { styled } from "styled-components";
import DiceSection from "./DiceSection";
import ScoreBoard from "./ScoreBoard";

function GamePlay() {
  let arrNumber = [1, 2, 3, 4, 5, 6];
  let [scoreframe, setScoreframe] = useState(0);
  let [selected, setSelected] = useState(1);
  let [diceNumber, setDiceNumber] = useState(2);
  let [score, setScore] = useState(0);

  function selectionHandler(event) {
    setSelected(event.target.textContent);
  }
  const handleClick = () => {
    let random = Math.floor(Math.random() * (7 - 1) + 1);
    setDiceNumber(random);
    if(selected==random) {
      setScoreframe(1);
    }
    else {
      setScore((score) => score + 1);
    }
  };

  const handleScoreClick = () =>{
    setScoreframe(0);
    setScore(0);
  }

  const resetButtonHandler = () => {
    setScore(0);
    setDiceNumber(2);
    setSelected(1);
  }

  return (
    <>
      <div className={styles.gamearea}>
        <div className={styles.navarea}>
          <div className={styles.leftnav}>
            <h1 className={styles.totalScore}>{score}</h1>
            <h5 className={styles.score}> Total Score</h5>
          </div>
          <div className={styles.rightnav}>
            <div className={styles.diceNumbers}>
              {arrNumber.map((value, i) => (
                <NumberCard
                  key={i}
                  value={value}
                  selectionHandler={() => selectionHandler(event)}
                  selected={selected == value ? true : false}
                />
              ))}
            </div>
            <div className={styles.selectLine}>Select Number</div>
          </div>
        </div>
      </div>
      {!scoreframe && <DiceSection number = {diceNumber} handleClick={handleClick} resetButtonHandler={resetButtonHandler}/>}
      {scoreframe && <ScoreBoard score={score} handleScoreClick={handleScoreClick} />}
    </>
  );
}

export default GamePlay;
