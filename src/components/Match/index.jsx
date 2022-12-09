import React from "react";
import Flag from "react-world-flags";
import styles from "./match.module.css";
import { useState } from "react";
import COUNTRYS from "../../utils/countrys";
import { useDispatch, useSelector } from "react-redux";
import { editMatchThunk } from "../../store/matches/thunks";

const Match = (props) => {
    const dispatch = useDispatch();
    const [scoreHome, setScoreHome] = useState(props.homeScore);
    const [scoreAway, setScoreAway] = useState(props.awayScore);
    const matchesSelector = useSelector((state) => state.matches);
    const [edit, setEdit] = useState(false);
    const [updated, setUpdated] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleScoreSubstract = (score) => {
        if (score > 0) {
            return score - 1;
        }
        return score;
    };

    const editScore = () => {
      let match = {
        id: props.id,
        homeScore: scoreHome,
        awayScore: scoreAway,
      };
      dispatch(editMatchThunk(match)).then(() => {
        setUpdated(true);
      });
    };

    if(updated && !matchesSelector.isLoading) {
      setUpdated(false);
      handleEdit();
    }

    if(updated && matchesSelector.isLoading) {
      return (
        <div className={styles.matchCard}>
          <h1>Loading...</h1>
        </div>
      );
    }

    if (matchesSelector.isError) {
      return (
        <div className={styles.matchCard}>
          <h1>Error...</h1>
        </div>
      );
    }

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
        { (props.noEditable) ? null :
          edit ? <button onClick={editScore} className={styles.editBtn}>Save Score</button> :
          <button onClick={handleEdit} className={styles.editBtn}>Edit Score</button>
          }
      </div>
    </div>
  );
};

export default Match;