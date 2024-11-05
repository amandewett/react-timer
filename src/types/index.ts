export type CalculateTimeReturnType = {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type CounterComponentProps = {
  eventTime: number;
};

export type CounterBackgroundProps = {
  value: number;
  type: string;
  isExpanded?: boolean;
};
