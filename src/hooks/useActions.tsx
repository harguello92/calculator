import { useState } from "preact/hooks";
import useGlobalState from "./useGlobalState";
import { SIGNS } from "../constants/signs";

const useActions = () => {
  const { setDisplay, display, setSubDisplay } = useGlobalState();
  const [newOperation, setNewOperation] = useState(true);

  // TODO: Move to a utils file using a display bussines logic service
  const getLastItem = (string: string) => string.slice(-1);
  const getIsNumber = (string: string) => !isNaN(Number(string));

  const isValidOperation = (operation: string) => {
    const lastItem = getLastItem(display);
    const lastItemIsNumber = getIsNumber(lastItem);
    const isDisplayInitialStatus = display !== "0";
    const isNegatingNumber =
      operation === SIGNS.minus && lastItem !== SIGNS.minus;

    return (lastItemIsNumber && isDisplayInitialStatus) || isNegatingNumber;
  };

  const setOperation = (operation: string) => {
    if (!isValidOperation(operation)) return;

    setNewOperation(false);
    setDisplay(display.concat(operation));
  };

  const setNumber = (number: string) => {
    if (newOperation) {
      setNewOperation(false);
      setDisplay(number);
      return;
    }
    setDisplay(display.concat(number));
  };

  const evaluation = () => {
    try {
      const toEvaluate = display.replace(/x/g, "*");
      const hasSomethingToEvaluate = !getIsNumber(toEvaluate);

      if (!hasSomethingToEvaluate) return;

      setSubDisplay(display + "=");
      setDisplay(eval(toEvaluate).toString());
      setNewOperation(true);
    } catch (error) {
      setSubDisplay("Error");
    }
  };

  const reset = () => {
    setDisplay("0");
    setSubDisplay("");
  };

  return { setOperation, setNumber, evaluation, reset };
};

export default useActions;
