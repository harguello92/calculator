import type { Sign } from '../constants/signs.types';

const getIsNumber = (item: Sign) => !isNaN(Number(item));
export default getIsNumber;
