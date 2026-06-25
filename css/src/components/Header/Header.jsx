import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.Header}>
      <h3 className={styles.logo}>School of AI</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header