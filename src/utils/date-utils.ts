import { getLocaleFromDom } from './locale';

const DATE_FMT: Intl.DateTimeFormatOptions = {
  dateStyle: 'long',
  timeStyle: 'short',
};

/**
 * Formats date from API datestring to readable date and time.
 *
 * @param date datestring from regobs api, 2023-06-24T18:01:34+00:00
 * @returns readable date and time, eg. 24. juni 2023 kl. 20:01
 */
export function formatDateString(date: string, elem: HTMLElement): string {
  return new Date(date).toLocaleString(getLocaleFromDom(elem), DATE_FMT);
}

/**
 * Format start and end times in a single string.
 *
 * If start or end are missing, returns just the provided date formatted.
 *
 * @param start datestring from regobs api, 2023-06-24T18:01:34+00:00
 * @param end datestring from regobs api, 2023-06-24T20:01:34+00:00
 * @returns 24. juni 2023 kl. 20:01 - 24. juni 2023 kl. 22:01
 */
export function getStartEndTimeFormatted(start: string, end: string, elem: HTMLElement): string {
  const formattedTimeStrings: string[] = [];
  if (start) {
    formattedTimeStrings.push(formatDateString(start, elem));
  }
  if (end) {
    formattedTimeStrings.push(formatDateString(end, elem));
  }

  return formattedTimeStrings.join(' - ');
}
