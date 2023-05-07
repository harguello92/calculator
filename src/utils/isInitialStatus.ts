import { Sign } from "../constants/signs";

const getIsInitialStatus = (items: Sign[]) => items.length === 0;
export default getIsInitialStatus;
