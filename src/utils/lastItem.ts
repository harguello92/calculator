import type { Sign } from "../constants/signs.types";

const getLastItem = (items: Sign[]) => items[items.length - 1];
export default getLastItem;
