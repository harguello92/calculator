import ConfettiExplosion from 'react-confetti-explosion';
import styles from './index.module.css';

function Confetti() {
  return (
    <div className={styles.confetti}>
      <ConfettiExplosion />
    </div>
  );
}

export default Confetti;
