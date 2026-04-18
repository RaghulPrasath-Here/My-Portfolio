import { useState } from 'react';
import { SKILLS } from '../data';
import { SkillCard } from './SkillCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { SkillFilter } from '../types';
import styles from './Skills.module.css';

const FILTERS: SkillFilter[] = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Other'];

export function Skills() {
  const [active, setActive] = useState<SkillFilter>('All');
  const { ref: headRef, isVisible: headVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  const filtered =
    active === 'All' ? SKILLS : SKILLS.filter((s) => s.category === active);

  const handleFilter = (f: SkillFilter) => {
    if (f === active) return;
    setActive(f);
  };

  return (
    <section id="skills" className={styles.section}>
      <div
        ref={headRef}
        className={`${styles.head} ${headVisible ? styles.visible : ''}`}
      >
        <h2 className={styles.title}>
          Technical <span className={styles.accent}>Expertise</span>
        </h2>
      </div>

      <div className={`${styles.filters} ${headVisible ? styles.visible : ''}`} style={{ transitionDelay: '0.15s' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${active === f ? styles.activeFilter : ''}`}
            onClick={() => handleFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
      >
        {filtered.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}
