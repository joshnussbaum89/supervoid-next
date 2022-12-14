// Styles
import styles from './Hamburger.module.css'

export default function Hamburger({
  handleMobileNavDisplay,
  mobileNavIsActive,
}) {
  return (
    <div
      onClick={handleMobileNavDisplay}
      className={
        mobileNavIsActive
          ? `${styles.hamburger} ${styles.active}`
          : `${styles.hamburger}`
      }
    >
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </div>
  )
}
