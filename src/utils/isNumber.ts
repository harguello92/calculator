import { Sign } from "../constants/signs";

const getIsNumber = (item: Sign) => !isNaN(Number(item));
export default getIsNumber;
