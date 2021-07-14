import { useState } from "react";
import styles from "../styles/components/CounteDown.module.css";

export function CounteDown() {
  const [] = useState();
  return (
    <div>
    <div className={styles.counteDownContainer}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>

      <button type="button" className={styles.countDownButton} >
        Iniciar um ciclo
      </button>
    </div>
  );
}
