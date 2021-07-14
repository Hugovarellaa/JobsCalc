import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperenceBar } from "../components/ExperenceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperenceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
