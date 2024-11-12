import FlipNumbers from "react-flip-numbers";
import React from "react";
import { addLeadingZero } from "../../data/addLeadingZero";
import { CounterBackgroundProps } from "../../types";
import useScreenSize from "../../hooks/useScreenSize";

const CounterBackground: React.FC<CounterBackgroundProps> = ({ isExpanded = false, ...props }) => {
  const { width } = useScreenSize();
  let nWidth = width <= 700 ? 50 : width <= 1000 ? 80 : width <= 1536 ? 90 : 100;

  return (
    <section className="container">
      <div className={`card-container ${isExpanded ? "large-container" : ""}`}>
        <div className="card-divider" />
        <FlipNumbers height={nWidth} width={nWidth} perspective={800} color="var(--app-color-white)" play numbers={addLeadingZero(props.value)} numberStyle={{ position: "absolute" }} />
      </div>
      <h4 className="h4-timer-type">{props.type}</h4>
    </section>
  );
};

export default CounterBackground;
