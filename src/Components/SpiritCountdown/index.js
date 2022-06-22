import React, { useState, useEffect } from "react";
import "./style.scss";

export default function SpiritCountdown({ endTime, onComplete }) {
  const [countdownTimer, setCountdownTimer] = useState(null);
  const [countdown, setCountdown] = useState({
    days: "-",
    hours: "-",
    minutes: "-",
    seconds: "-",
  });

  const calculateCountdown = () => {
    const timeGap = Math.floor(endTime - new Date().valueOf() / 1000);

    if (timeGap < 0) {
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      if (onComplete) {
        onComplete();
      }
      return;
    }

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
    <div className="spirit-countdown">
      <div className="countdown-item">
        {countdown.days} <span className="unit">D</span>
      </div>
      <div className="countdown-item">
        {countdown.hours} <span className="unit">H</span>
      </div>
      <div className="countdown-item">
        {countdown.minutes} <span className="unit">M</span>
      </div>
      <div className="countdown-item">
        {countdown.seconds} <span className="unit">S</span>
      </div>
    </div>
  );
}
