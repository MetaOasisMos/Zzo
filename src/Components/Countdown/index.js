import React, { useState, useEffect } from "react";

export default function Countdown({ endTime }) {
  const [countdownTimer, setCountdownTimer] = useState(null);
  const [countdown, setCountdown] = useState({
    days: "-",
    hours: "-",
    minutes: "-",
    seconds: "-",
  });

  const calculateCountdown = () => {
    const timeGap = Math.floor(endTime - new Date().valueOf() / 1000);
    const days = Math.floor(timeGap / 86400);
    const hours = String(Math.floor((timeGap % 86400) / 3600)).padStart(2, "0");
    const minutes = String(
      Math.floor(((timeGap % 86400) % 3600) / 60)
    ).padStart(2, "0");
    const seconds = String(
      Math.floor(((timeGap % 86400) % 3600) % 60)
    ).padStart(2, "0");

    setCountdown({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    if (!endTime) {
      return;
    }

    const interval = setInterval(() => {
      calculateCountdown(endTime);
    }, 1000);

    setCountdownTimer(interval);

    return () => clearInterval(countdownTimer);
  }, [endTime]);

  return (
    <button className={"btn time-btn hover-move"} disabled>
      {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
      {countdown.seconds}s
    </button>
  );
}
