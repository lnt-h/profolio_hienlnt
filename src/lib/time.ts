export const VIETNAM_TIME_ZONE = "Asia/Ho_Chi_Minh";

export function formatVietnamDateTime(date: Date) {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: VIETNAM_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);

  const day = new Intl.DateTimeFormat("en-GB", {
    timeZone: VIETNAM_TIME_ZONE,
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  const year = new Intl.DateTimeFormat("en", {
    timeZone: VIETNAM_TIME_ZONE,
    year: "numeric",
  }).format(date);

  return { time, day, year };
}
