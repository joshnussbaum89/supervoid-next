// Components
import Image from 'next/future/image'
import Link from 'next/link'
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation'
import Hamburger from '../Hamburger/Hamburger'

// Styles
import styles from './MainNavigation.module.css'
import siteLogo from '../../../public/images/supervoid-logo-voidstar-stylized.webp'

export default function MainNavigation({
  mainNavIsVisible,
  mobileNavIsActive,
  handleMobileNavDisplay,
}) {
  return (
    <nav
      className={
        mainNavIsVisible
          ? `${styles.navigation} ${styles.show}`
          : styles.navigation
      }
    >
      <Link href="/">
        <div
          onClick={mobileNavIsActive ? handleMobileNavDisplay : null}
          className={styles.logo}
        >
          <Image
            src={siteLogo}
            title="Supervoid"
            width={216}
            height={216}
            sizes="(min-width: 768px) 10rem, 8rem"
            alt="Supervoid Logo Voidstar Stylized"
            priority
          />
        </div>
      </Link>
      <DesktopNavigation />
      <Hamburger
        handleMobileNavDisplay={handleMobileNavDisplay}
        mobileNavIsActive={mobileNavIsActive}
      />
    </nav>
  )
}
