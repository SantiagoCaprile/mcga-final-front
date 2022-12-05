import React from 'react'
import Match from '../../components/Match'
import styles from './matches.module.css'

const Matches = () => {

  return (
        <div>
            <h1 className={styles.title}>Matches</h1>
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
        </div>
  )
}

export default Matches