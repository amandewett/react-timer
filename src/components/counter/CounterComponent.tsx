import "./counterComponent.css";
import React, { useEffect, useState } from "react";
import { CalculateTimeReturnType, CounterComponentProps } from "../../types";
import { remainingTime } from "../../data/calculateTime";
import AppFlipNumberContainer from "./AppFlipNumberContainer";
import useScreenSize from "../../hooks/useScreenSize";

const CounterComponent: React.FC<CounterComponentProps> = ({ eventTime }) => {
  const [remainingCounter, setRemainingCounter] = useState<CalculateTimeReturnType>(remainingTime(eventTime));
  const { width } = useScreenSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingCounter(remainingTime(eventTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "100px", gap: "50px" }}>
        <section className="timer-container">
          <AppFlipNumberContainer value={remainingCounter.years} type="Years" isExpanded={remainingCounter.years.toString().length <= 2 ? false : true} />
          <AppFlipNumberContainer value={remainingCounter.months} type="Months" isExpanded={remainingCounter.months.toString().length <= 2 ? false : true} />
          <AppFlipNumberContainer value={remainingCounter.weeks} type="Weeks" isExpanded={remainingCounter.weeks.toString().length <= 2 ? false : true} />
          {width > 700 && <AppFlipNumberContainer value={remainingCounter.days} type="Days" isExpanded={remainingCounter.days.toString().length <= 2 ? false : true} />}
        </section>
        {width <= 700 && (
          <section className="timer-container">
            <AppFlipNumberContainer value={remainingCounter.days} type="Days" isExpanded={remainingCounter.days.toString().length <= 2 ? false : true} />
          </section>
        )}
        <section className="timer-container">
          <AppFlipNumberContainer value={remainingCounter.hours} type="Hours" isExpanded={remainingCounter.hours.toString().length <= 2 ? false : true} />
          <AppFlipNumberContainer value={remainingCounter.minutes} type="Minutes" isExpanded={remainingCounter.minutes.toString().length <= 2 ? false : true} />
          <AppFlipNumberContainer value={remainingCounter.seconds} type="Seconds" isExpanded={remainingCounter.seconds.toString().length <= 2 ? false : true} />
        </section>
      </div>
    </>
  );
};

export default CounterComponent;
