import { CalculateTimeReturnType } from "../types";

export const remainingTime = (eventTime: number): CalculateTimeReturnType => {
  const currentTime = new Date().getTime();
  const timeDifference = eventTime - currentTime;

  if (timeDifference <= 0) {
    return { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const oneSecondInMillisecond = 1000;
  const oneMinuteInMillisecond = oneSecondInMillisecond * 60;
  const oneHourInMillisecond = oneMinuteInMillisecond * 60;
  const oneDayInMillisecond = oneHourInMillisecond * 24;
  const oneWeekInMillisecond = oneDayInMillisecond * 7;
  const oneMonthInMillisecond = oneDayInMillisecond * 30;
  const oneYearInMillisecond = oneMonthInMillisecond * 12;

  const years = Math.floor(timeDifference / oneYearInMillisecond);
  const remainingAfterYears = timeDifference % oneYearInMillisecond;

  const months = Math.floor(timeDifference / oneMonthInMillisecond);
  const remainingAfterMonths = remainingAfterYears % oneMonthInMillisecond;

  const weeks = Math.floor(timeDifference / oneWeekInMillisecond);
  const remainingAfterWeeks = remainingAfterMonths % oneWeekInMillisecond;

  const days = Math.floor(timeDifference / oneDayInMillisecond);
  const remainingAfterDays = remainingAfterWeeks % oneDayInMillisecond;

  const hours = Math.floor(remainingAfterDays / oneHourInMillisecond);
  const remainingAfterHours = remainingAfterDays % oneHourInMillisecond;

  const minutes = Math.floor(remainingAfterHours / oneMinuteInMillisecond);
  const seconds = Math.floor((remainingAfterHours % oneMinuteInMillisecond) / oneSecondInMillisecond);

  return { years, months, weeks, days, hours, minutes, seconds };
};
