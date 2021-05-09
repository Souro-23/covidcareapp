import { Button } from "antd";
import React from "react";
import classes from "./Section3.module.css";
import anxietyGirl from "../../Assets/Svgs/anxietyGirl.svg";

export default function Section3({
  changeRoute
}) {
  return (
    <div className={classes.section3Card}>
      <p>FIGHT ANXIETY</p>
      <p>& STRESS</p>
      <p>FREE SESSIONS</p>
      <p>ON BREATHING TECHNIQUES</p>
      <Button onClick={()=>changeRoute("/register/breating-session")} className={classes.section3Button}>I'm Interested</Button>
      <div className={classes.iconGirl}>
        <img src={anxietyGirl} alt='girl icon' />
      </div>
    </div>
  );
}
