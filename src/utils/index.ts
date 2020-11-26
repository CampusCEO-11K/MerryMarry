import { Marriage } from "src/models";

export function getNameFromMarriage(marriage: Marriage): string {
  const maleName = marriage.maleName;
  const ladyName = marriage.ladyName;

  if (maleName && ladyName) {
    return `${maleName} ❤️ ${ladyName}`;
  } else if (maleName) {
    return maleName;
  } else if (ladyName) {
    return ladyName;
  } else {
    return 'OOO';
  }
}