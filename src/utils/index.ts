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

export function dateToString(d: Date) {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const date = d.getDate().toString().padStart(2, '0');
  const dayOfWeek = week[d.getDay()];

  return `${year}.${month}.${date} (${dayOfWeek})`;
}
