import { useState } from "preact/hooks";
import useGlobalState from "./useGlobalState";
import { SIGNS } from "../constants/signs";

const useActions = () => {
  const { setDisplay, display, setSubDisplay } = useGlobalState();

  // TODO: Move to a utils file using a display bussines logic service
  const getLastItem = (string: string) => string.slice(-1);
  const getIsNumber = (string: string) => !isNaN(Number(string));

  const isValidOperation = (operation: string) => {
    const lastItem = getLastItem(display);
    const lastItemIsNumber = getIsNumber(lastItem);
    const isDisplayInitialStatus = display !== "0";
    const isNegatingNumber =
      operation === SIGNS.minus && lastItem !== SIGNS.minus;

    return (
      operation === SIGNS.minus ||
      (lastItemIsNumber && isDisplayInitialStatus) ||
      isNegatingNumber
    );
  };

  const setOperation = (operation: string) => {
    if (!isValidOperation(operation)) return;

    if (display === "0" && operation === SIGNS.minus) {
      setDisplay(operation);
      return;
    }

    setDisplay(display.concat(operation));
  };

  const setNumber = (number: string) => {
    if (display === "0") {
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
    } catch (error) {
      setSubDisplay("Operación no válida");
    }
  };

  const reset = () => {
    setDisplay("0");
    setSubDisplay("");
  };

  const deleteLast = () => {
    if (display.length === 1) {
      setSubDisplay("");
      setDisplay("0");
      return;
    }

    setDisplay(display.slice(0, -1));
  };

  return { setOperation, setNumber, evaluation, reset, deleteLast };
};

export default useActions;
