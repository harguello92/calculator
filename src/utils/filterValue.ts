import type { Sign } from "../constants/signs.types";

const filterValue = (item: Sign[] | string) => {
  if (typeof item === "number") return item;
};
export default filterValue;
