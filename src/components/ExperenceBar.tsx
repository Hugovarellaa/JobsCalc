import styles from '../styles/components/ExperenceBar.module.css';

export function ExperenceBar (){
  return (
    <header className={styles.experenceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: "50%"}}/>
        <span className={styles.currentExperence} style={{left: "50%"}}> 300 xp </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}