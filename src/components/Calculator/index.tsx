import { GlobalContextProvider } from "../../context/GlobalState";
import Header from "./components/Header";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import styles from "./styles.module.css";

function Calculator() {
  return (
    <div className={styles.calculator}>
      <Header />
      <GlobalContextProvider>
        <Display />
        <Keyboard />
      </GlobalContextProvider>
    </div>
  );
}

export default Calculator;
