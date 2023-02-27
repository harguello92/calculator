export const deleteOctanCalculations = (number: string) => {
  return number.toString().replace(/^0.+/, "");
};
