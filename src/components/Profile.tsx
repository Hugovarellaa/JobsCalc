import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/Profile.module.css";
import { useContext } from "react";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Hugovarellaa.png" alt="Avatar" />
      <div>
        <strong>Hugo Alves Varella</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
