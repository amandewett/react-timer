import FlipNumbers from "react-flip-numbers";
import React from "react";
import { addLeadingZero } from "../../data/addLeadingZero";
import { CounterBackgroundProps } from "../../types";

const CounterBackground: React.FC<CounterBackgroundProps> = ({ isExpanded = false, ...props }) => {
  return (
    <section className="container">
      <div className={isExpanded ? "card-container large-container" : "card-container"}>
        <div className="card-divider" />
        <FlipNumbers height={100} width={100} perspective={800} color="var(--app-color-white)" play numbers={addLeadingZero(props.value)} numberStyle={{ position: "absolute" }} />
      </div>
      <h4 className="h4-timer-type">{props.type}</h4>
    </section>
  );
};

export default CounterBackground;
