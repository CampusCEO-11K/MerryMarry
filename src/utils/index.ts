import { Marriage } from "src/models";

export function getNameFromMarriage(marriage: Marriage): string {
  const maleName = marriage.male.name;
  const ladyName = marriage.lady.name;

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