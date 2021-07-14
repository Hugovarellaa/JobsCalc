import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  return(
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeBoxNotActive}>
        <strong>
          Inicie um ciclo para receber desafios a serem completados
        </strong>
        <p>
          <img src="/icons/level-up.svg" alt="Level up" />
          Avance de level completado os desafios
        </p>
      </div>
    </div>
  )
}