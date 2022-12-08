import React from 'react'
import styles from './layout.module.css'
import { Link } from 'react-router-dom'
import { resetUser } from '../../store/users/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const Layout = ({children}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false)
  const userSelector = useSelector(state => state.users)

  console.log("userSelector: ", userSelector)

  //if userSelector is not empty, show menu else hide menu
  //but when userSelector is not empty, it should show menu

  useEffect(() => {
    if (userSelector && userSelector.data.message === "OK") {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }, [userSelector])

  const handleLogout = () => {
    dispatch(resetUser())
    navigate("/")
  }

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>MCGA 2022</h1>
        <div className={styles.links}>
          { showMenu ? <>
            <Link className={styles.link} to="/matches">Matches</Link>
            <Link className={styles.link} to="/matches/create">Create</Link>
            <button className={styles.link} to="/login" onClick={handleLogout}>Log Out</button>
          </> : null }
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
        <div className={styles.sidebar}>
          <img className={styles.logo}
            src="https://assets.stickpng.com/images/5842fe21a6515b1e0ad75b3e.png"
            alt='logo'
          />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Layout