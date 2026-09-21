import styles from '../styles/About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.badge}>Internal Knowledge Sharing</div>
      <h1 className={styles.heading}>Dev Insights</h1>
      <p className={styles.subtext}>
        A mini blog for software engineers and developers to share learning tips and lessons learned in modern web development.
      </p>
    </section>
  );
}

export default About;
