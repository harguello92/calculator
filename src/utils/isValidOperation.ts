import { SIGNS, Sign } from "../constants/signs";
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
