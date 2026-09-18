import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Dev Insights</div>
      <nav>
        <a href="#" className={styles.navLink}>
          New Post
        </a>
      </nav>
    </header>
  );
}

export default Header;