import React from "react";
import Flag from "react-world-flags";
import styles from "./match.module.css";
import { useState } from "react";
import COUNTRYS from "../../utils/countrys";

const Match = (props) => {
    const [scoreHome, setScoreHome] = useState(0);
    const [scoreAway, setScoreAway] = useState(0);
    const [edit, setEdit] = useState(false);
    console.log("props de match",props);
    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleScoreSubstract = (score) => {
        if (score > 0) {
            return score - 1;
        }
        return score;
    };

    const homeCode = COUNTRYS.find((country) => country.name === props.homeTeam).code;
    const awayCode = COUNTRYS.find((country) => country.name === props.awayTeam).code;

  return (
    <div className={styles.matchCard}>
      <div className={styles.matchScore}>
        <div className={styles.matchTeam}>
          <Flag code={homeCode} height="50" />
          <h3>{props.homeTeam}</h3>
        </div>
        <div className={styles.score}>
          {edit && (
            <button
              onClick={() => setScoreHome(scoreHome + 1)}
              className={styles.button}
            >
              +
            </button>
          )}
          <h3>{scoreHome}</h3>
          {edit && (
            <button
              onClick={() => setScoreHome(handleScoreSubstract(scoreHome))}
              className={styles.button}
            >
              -
            </button>
          )}
        </div>
        -
        <div className={styles.score}>
          {edit && (
            <button
              onClick={() => setScoreAway(scoreAway + 1)}
              className={styles.button}
            >
              +
            </button>
          )}
          <h3>{scoreAway}</h3>
          {edit && (
            <button
              onClick={() => setScoreAway(handleScoreSubstract(scoreAway))}
              className={styles.button}
            >
              -
            </button>
          )}
        </div>
        <div className={styles.matchTeam}>
          <Flag code={awayCode} height="50" />
          <h3>{props.awayTeam}</h3>
        </div>
      </div>
      <div className={styles.matchInfo}>
        <p>{props.matchDate}</p>
        <button onClick={handleEdit} className={styles.editBtn}>
          {edit ? <span>Save Score</span> : <span>Edit Score</span>}
        </button>
      </div>
    </div>
  );
};

export default Match;