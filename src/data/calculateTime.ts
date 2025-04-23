import { CalculateTimeReturnType } from "../types";

export const remainingTime = (eventTime: number): CalculateTimeReturnType => {
  const now = new Date();
  const future = new Date(eventTime);

  if (future <= now) return { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  //time difference in milliseconds
  const totalMilliseconds = future.getTime() - now.getTime();

  //total full days between now and event time
  const totalDaysRemaining = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

  let years = future.getFullYear() - future.getFullYear();
  let months = future.getMonth() - future.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalMonthsRemaining = (future.getFullYear() - now.getFullYear()) * 12 + (future.getMonth() - now.getMonth());

  // Convert total days into weeks and leftover days
  const weeks = Math.floor(totalDaysRemaining / 7);
  const days = totalDaysRemaining % 7;

  // Remaining time of today
  const hours = 23 - now.getHours();
  const minutes = 59 - now.getMinutes();
  const seconds = 59 - now.getSeconds();

  return { years, months: totalMonthsRemaining, weeks, days: totalDaysRemaining, hours, minutes, seconds };
};
