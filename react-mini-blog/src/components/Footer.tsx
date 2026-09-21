import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.logo}>Dev Insights</span>
          <p className={styles.tagline}>
            We Empower developers to build cleaner and better web experiences.
          </p>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Dev Insights. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
