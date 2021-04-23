import { Button } from "antd";
import React from "react";
import classes from "./InfoCard.module.css";
import whatsapp from "../../IconImages/whatsapp.png";
import pin from "../../IconImages/pin.svg";

export default function InfoCard({ name, phone, type, location }) {
  return (
    <div className={classes.infoCard}>
      <div className={classes.details}>
        <div className={classes.nameAndPhone}>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        {type === "doctors" ? (
          <Button
            className={classes.Button}
            icon={
              <img
                src={whatsapp}
                style={{ height: "20px", width: "20px", paddingRight: "2px" }}
                alt='WhatsApp Logo'
              />
            }>
            WhatsApp
          </Button>
        ) : (
          <Button className={classes.Button}>Call Now</Button>
        )}
      </div>
      {type === "doctors" ? (
        <div className={classes.status}>Available Now</div>
      ) : (
        <div className={classes.status}>
          <p>{location}</p>
          <img
            src={pin}
            alt='pin logo'
            style={{ height: "15px", width: "15px" }}
          />
        </div>
      )}
    </div>
  );
}
