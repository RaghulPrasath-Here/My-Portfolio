import { useScrollReveal } from '../hooks/useScrollReveal';
import { ABOUT_STATS } from '../data';
import styles from './About.module.css';

export function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
      {/* Photo */}
        <div
          ref={leftRef}
          className={`${styles.photoSide} ${leftVisible ? styles.visible : ''}`}
        >
          <div className={styles.photoFrame}>
            <div className={styles.photoInner}>
              <img
                src="/Me.jpg"
                alt="Raghul Prasath Ravikumar"
                className={styles.photoImg}
              />
            </div>
            <div className={styles.photoCorner} />
          </div>
        </div>

        {/* Text */}
        <div
          ref={rightRef}
          className={`${styles.textSide} ${rightVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>
            Who I <span className={styles.accent}>Am</span>
          </h2>
          <h3 className={styles.subtitle}>A  full stack developer based in Dublin</h3>
          <p className={styles.body}>
            Hi, I'm Raghul Prasath Ravikumar — a Full Stack Developer based in Dublin. 
            I hold a Master's in Computer Science from UCD and have hands-on experience 
            building web applications from frontend to deployment.
          </p>
          <p className={styles.body}>
            I work primarily with React on the frontend and Python / FastAPI on the backend, 
            with PostgreSQL for data and Docker + AWS for getting things into production. 
            I enjoy the full journey of a product — from designing a clean UI to architecting the API behind it.
          </p>
          <p className={styles.body}>
            I'm particularly drawn to AI-driven products and have hands-on experience building applications 
            where AI is a core part of the product, not an afterthought. 
            Have a look around and feel free to reach out.
          </p>

          <div className={styles.stats}>
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className={styles.statCard} data-hover>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statValue}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
