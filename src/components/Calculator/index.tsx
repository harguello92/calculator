import { GlobalContextProvider } from "../../context/GlobalState";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";
import styles from "./styles.module.css";

function Calculator() {
  return (
    <div className={styles.calculator}>
      <Header />
      <GlobalContextProvider>
        <Screen />
        <Keyboard />
      </GlobalContextProvider>
    </div>
  );
}

export default Calculator;
