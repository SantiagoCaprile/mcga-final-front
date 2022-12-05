import React from 'react'
import styles from './layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>MCGA 2022</h1>
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