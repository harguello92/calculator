import { SIGNS } from "../constants/signs";
import type { Sign } from "../constants/signs.types";
import getIsInitialStatus from "./isInitialStatus";
import getIsNumber from "./isNumber";
import getLastItem from "./lastItem";

const isValidOperation = (operations: Sign[], operation: string) => {
  const lastDisplayItem = getLastItem(operations);
  const lastDisplayItemIsNumber = getIsNumber(lastDisplayItem);
  const isDisplayInitialStatus = getIsInitialStatus(operations);
  const isNegatingNumber =
    operation === SIGNS.minus.operation && lastDisplayItem !== SIGNS.minus;

  return (
    operation === SIGNS.minus.operation ||
    (lastDisplayItemIsNumber && !isDisplayInitialStatus) ||
    isNegatingNumber
  );
};

export default isValidOperation;
