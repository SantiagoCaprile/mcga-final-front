import React from 'react'
import Match from '../../components/Match'
import styles from './matches.module.css'

const Matches = () => {

  return (
        <div>
            <h1 className={styles.title}>Future Matches</h1>
            <Match
              homeTeam={"Argentina"}
              awayTeam={"Brazil"}
              matchDate={"12/12/2021 - 12:00"}
              />
            <Match
              homeTeam={"Germany"}
              awayTeam={"Spain"}
              matchDate={"13/12/2021 - 13:00"}
              />
            <Match
              homeTeam={"Tunisia"}
              awayTeam={"France"}
              matchDate={"14/12/2021 - 14:00"}
              />
            <Match
              homeTeam={"Qatar"}
              awayTeam={"Uruguay"}
              matchDate={"15/12/2021 - 15:00"}
              />
        </div>
  )
}

export default Matches