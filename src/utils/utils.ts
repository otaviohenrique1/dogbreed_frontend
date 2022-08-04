export function toUpperCaseFirstLetter(text: string) {
  const firstLetter = String(text)[0].toUpperCase();
  const restOfTheString = String(text).substring(1);
  let result = firstLetter + restOfTheString;
  return result;
}