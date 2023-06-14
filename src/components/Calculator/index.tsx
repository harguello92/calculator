import ConfettiExplosion from 'react-confetti-explosion';
import { GlobalContextProvider } from '../../context/GlobalState';
import Credits from './components/Credits';
import Display from './components/Displays';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import styles from './styles.module.css';

const Calculator = () => (
  <>
    <div className={styles.calculator}>
      <Header />
      <GlobalContextProvider>
        <Display />
        <Keyboard />
      </GlobalContextProvider>
    </div>
    <Credits />
  </>
);

export default Calculator;
