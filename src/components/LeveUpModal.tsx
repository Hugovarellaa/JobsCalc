import styles from "../styles/components/LeveUpModal.module.css";

export function LevLeveUpModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>
        <strong>Parabens</strong>
        <p>Voce Alcançou um novo level.</p>

        <button type="button"></button>
      </div>
    </div>
  );
}
