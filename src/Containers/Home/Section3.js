import { Button } from "antd";
import React from "react";
import classes from "./Section3.module.css";

export default function Section3() {
  return (
    <div className={classes.section3Card}>
      <p>FIGHT ANXIETY</p>
      <p>& STRESS</p>
      <p>FREE SESSIONS</p>
      <p>ON BREATHING TECHNIQUES</p>
      <Button className={classes.section3Button}>I'm Intrested</Button>
    </div>
  );
}
