import type { Sign } from "../constants/signs.types";

const getIsInitialStatus = (items: Sign[]) => items.length === 0;
export default getIsInitialStatus;
