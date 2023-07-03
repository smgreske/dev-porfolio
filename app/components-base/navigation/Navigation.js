import styles from '../../styles/compiled-css/Navigation.module.css'

export default function Navigation() {

    return (
      <div className={styles.div}>
        <label className={styles.label}>
          <input className={styles.input} type="checkbox"/>
          <i className={styles.navclosed}>open</i>
          <i className={styles.navopen}>close</i>
        </label>
        <nav className={styles.nav}>
          <a className={styles.a} href='/about'>About</a>
          <a className={styles.a} href='/blog'>Blog</a>
        </nav>
      </div>   
    )
}




