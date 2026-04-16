import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import styles from './Navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#home" className={styles.logo} onClick={() => scrollTo('home')}>
          &lt;Dev <span>/&gt;</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link.toLowerCase())} className={styles.navBtn}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
        {NAV_LINKS.map((link) => (
          <button key={link} className={styles.mobileLink} onClick={() => scrollTo(link.toLowerCase())}>
            {link}
          </button>
        ))}
      </div>
    </>
  );
}
