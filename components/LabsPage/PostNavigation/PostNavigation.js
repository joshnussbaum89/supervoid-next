// Components, helpers
import Link from 'next/link'
import Arrow from '../../Global/Arrow/Arrow'

// Styles
import styles from './PostNavigation.module.css'

export default function PostNavigation({ previousPost, nextPost }) {
  return (
    <div className={styles.postNavigation}>
      {previousPost?.slug.current && (
        <Link href={`${previousPost.slug.current}`}>
          <div className={styles.previous} title={previousPost.title}>
            <Arrow direction="left" size="30.75" />
            <p>{previousPost.title}</p>
          </div>
        </Link>
      )}
      {nextPost?.slug.current && (
        <Link href={`${nextPost.slug.current}`}>
          <div className={styles.next} title={nextPost.title}>
            <p>{nextPost.title}</p>
            <Arrow direction="right" size="30.75" />
          </div>
        </Link>
      )}
    </div>
  )
}
