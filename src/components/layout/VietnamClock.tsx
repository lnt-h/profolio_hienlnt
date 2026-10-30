"use client";

import { useEffect, useState } from "react";
import { formatVietnamDateTime } from "@/lib/time";

export function VietnamClock() {
  const [now, setNow] = useState<ReturnType<typeof formatVietnamDateTime> | null>(null);

  useEffect(() => {
    const update = () => setNow(formatVietnamDateTime(new Date()));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="clock" aria-label="Current date and time in Vietnam">
      <span>{now?.day ?? "-- --- ----"}</span>
      <time dateTime={now ? `${now.day} ${now.time} UTC+07:00` : undefined}>{now?.time ?? "--:--:--"} ICT (UTC+7)</time>
    </div>
  );
}

export function VietnamYear() {
  const [year, setYear] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setYear(formatVietnamDateTime(new Date()).year);
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return <span aria-label="Copyright year">{year ?? "----"}</span>;
}

