import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/ExperenceBar.module.css";

export function ExperenceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experenceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperence}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
