// Components
import Image from 'next/image'

// Styles, images
import styles from './HomePageHeroInfo.module.css'
import titleImage from '../../public/images/supervoid-title-text-no-tv.webp'

export default function HomePageHeroInfo({ handleReelDisplay }) {
  return (
    <section className={styles.info}>
      <div className={styles.title}>
        <Image src={titleImage} alt="Supervoid title image text" priority />
      </div>
      <p>Psychedelic Dreams for Stage + Screen</p>
      <div className={styles.ctaContainer}>
        <button onClick={handleReelDisplay}>2022 reel</button>
      </div>
    </section>
  )
}
