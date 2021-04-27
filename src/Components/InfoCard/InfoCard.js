import { Badge, Button } from "antd";
import React from "react";
import classes from "./InfoCard.module.css";
import WhatsApp from "../../Assets/Svgs/WhatsApp.png";

export default function InfoCard({
  name,
  phone,
  type,
  location,
  verified,
  available,
  timeSlots,
  ago,
}) {
  console.log(available);
  return (
    <div className={classes.infoCard}>
      <div className={classes.details}>
        <div className={classes.nameAndPhone}>
          <p>{name}</p>
          <p>+91-{phone}</p>
          <p style={{ color: "grey", fontSize: "12px" }}>{ago}</p>
        </div>
        {type === "doctors" ? (
          <a target='blank' href={`https://wa.me/91${phone}`}>
            <Button
              className={classes.Button}
              icon={
                <img
                  src={WhatsApp}
                  style={{ height: "20px", width: "20px", paddingRight: "2px" }}
                  alt='WhatsApp Logo'
                />
              }>
              WhatsApp
            </Button>
          </a>
        ) : (
          <a href={`tel:${phone}`}>
            <Button className={classes.Button}>Call Now</Button>
          </a>
        )}
      </div>
      {type === "doctors" ? (
        <div className={classes.available}>
          {available && <div className={classes.status}>Available Now</div>}
          <div>
            {timeSlots.map((timeSlot, index) => (
              <p
                style={{
                  color: "grey",
                  fontSize: "12px",
                  marginBottom: "0px",
                }}>
                {timeSlot}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.status}>
          <div className={classes.location}>
            <p>{location}</p>
            <ion-icon name='location-outline'></ion-icon>
          </div>
          {verified ==="yes" ? (
            <Badge
              style={{
                backgroundColor: "rgb(88,228,88)",
                marginBottom: "10px",
                marginRight: "0px",
                width: "56px",
              }}
              count={"Verified"}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
