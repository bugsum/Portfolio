import { site } from "@/content/site";

const MONTH_YEAR = new Intl.DateTimeFormat(site.locale, {
  month: "short",
  year: "numeric",
});

export function formatMonth(value: string): string {
  return MONTH_YEAR.format(new Date(`${value}-01T00:00:00Z`));
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}

export function formatYear(value: string): string {
  return value.slice(0, 4);
}
