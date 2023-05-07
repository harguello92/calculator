import { GlobalContextProvider } from "../../context/GlobalState";
import Header from "./components/Header";
import Displays from "./components/Displays";
import Keyboard from "./components/Keyboard";
import styles from "./styles.module.css";

const Calculator = () => (
  <div className={styles.calculator}>
    <Header />
    <GlobalContextProvider>
      <Displays />
      <Keyboard />
    </GlobalContextProvider>
  </div>
);

export default Calculator;
