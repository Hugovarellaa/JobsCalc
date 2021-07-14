import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Hugovarellaa.png" alt="Avatar" />
      <div>
        <strong>Hugo Alves Varella</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
          </p>
      </div>
    </div>
  )
}
