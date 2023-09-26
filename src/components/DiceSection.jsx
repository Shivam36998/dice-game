import React, { useState } from 'react'
import styles from './DiceSection.module.css';
import Rules from './Rules';

const DiceSection = (props) => {
  let [reset, setReset ] = useState("");
  let [rules, setRules ] = useState(0);
  const handleReset = () => {
    props.resetButtonHandler();
    setReset("game was reset")
    setTimeout(()=>{
      setReset("")
    }, 1000)
  }

  const ruleHandler = () => {
    if(!rules) setRules(1)
    else setRules(0)
  }

  return (
    <div className={styles.diceArea}>
      <div className="dice">
        <img
          className={styles.dice_image}
          src={`src/images/dice_${props.number}.png`}
          onClick={props.handleClick}
        />
      </div>
      <button
        className={styles.btn_sub}
        onClick={handleReset}>
        {" "}
        Reset{" "}
      </button>
      <div className={styles.afterReset}>{reset}</div>
      <div className={styles.gameRules}><button className={styles.gameRulesButton} onClick={ruleHandler}>{rules ? "Hide Rules" : "Show Rules"  }</button>{rules ? <Rules/> : ""}</div>

    </div>
  );
}


export default DiceSection
