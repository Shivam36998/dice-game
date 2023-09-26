import React from 'react'
import styles from "./ScoreBoard.module.css"

const ScoreBoard = (props) => {
  return (
    <>
      <div className={styles.score_board}>
        <img src="src\images\smile.png" />
        <div className={styles.score_line}>Your score is {props.score}</div>
        <button
          className={styles.btn_sub}
          onClick={props.handleScoreClick}>
          Play Again
        </button>
      </div>
    </>
  );
}

export default ScoreBoard
