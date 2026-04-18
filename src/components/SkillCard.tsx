import type { Skill } from '../types';
import styles from './SkillCard.module.css';

interface Props {
  skill: Skill;
}

export function SkillCard({ skill }: Props) {
  return (
    <div className={styles.card} data-hover>
      <div className={styles.left}>
        <i className={`${skill.icon} ${styles.icon}`} />
        <span className={styles.name}>{skill.name}</span>
      </div>
      <span className={styles.tag}>{skill.category}</span>
    </div>
  );
}