import styles from '../../styles/compiled-css/HeroSection.module.css'


export default function HeroSection({ children }) {

  return (
    <div className={styles.heroSection}>
      <div className={styles.imageContainer}>
        {children}
        <div className={styles.circle}>
          <img src="/static/pattern-circle.svg"/>
        </div>
        <div className={styles.rings}>
          <img src="/static/pattern-rings.svg"/>
        </div>
      </div>
      
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>Nice to meet you! I’m <span className={styles.span}>Adam Keyes</span>.</h1>
        <p className={styles.p}>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <a className={styles.a} href="#contact-section">Contact Me</a>
      </div>
    </div>
  )
}
