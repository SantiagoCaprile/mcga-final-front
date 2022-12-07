import React from 'react'
import Match from '../../components/Match'
import styles from './matches.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { saveMatches } from '../../store/matches/thunks'

const Matches = () => {
  const dispatch = useDispatch()
  const matchesSelector = useSelector(state => state.matches)

  useEffect(() => {
    dispatch(saveMatches())
  }, [dispatch])

  if (matchesSelector.isLoading) {
    return <h1>Loading...</h1>
  }
  console.log(matchesSelector)
  if (matchesSelector.isError) {
    return <h1>Error...</h1>
  }

  return (
        <div>
            <h1 className={styles.title}>Future Matches</h1>
            {
              matchesSelector.data.map((match) => {
                const date = match.date.split("T")[0].split("-").reverse().join("/")
                const time = match.date.split("T")[1].split(":").slice(0, 2).join(":")
                return (
                  <Match
                    homeTeam={match.homeTeam}
                    awayTeam={match.awayTeam}
                    matchDate={date + " - " + time}
                    />
                )
              })
            }
        </div>
  )
}

export default Matches