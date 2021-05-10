import { Button } from "antd";
import React from "react";
import classes from "./InfoCard.module.css";
import WhatsApp from "../../Assets/Svgs/WhatsApp.png";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";

export default function InfoCard({
  name,
  phone,
  type,
  location,
  verified,
  available,
  timeSlots,
  ago,
  isFree,
  charges,
  homeTest,
  waitTime,
  resultTime
}) {

  return (
    <div className={classes.infoCard}>
      <div className={classes.details}>
        <div className={classes.nameAndPhone}>
          <p>{name}</p>
          <p style={{ color: "rgb(88,228,88)" }}>{phone}</p>
          {type === "lab" ? (
            <>
              <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
                Charge - &#x20B9;{charges}
              </p>
              <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
                <b>Test Result: </b> {resultTime}
              </p>
            </>
          ) : (
            <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
              {isFree}
            </p>
          )}
        </div>
        {type === "doctors" ? (
          <a target='blank' href={`https://wa.me/91${phone}`}>
            <Button
              className={classes.Button}
              disabled={!available}
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
            <Button disabled={phone === ""} className={classes.Button} style={phone === "" ? { opacity: "0.5" } : {}}>Call Now</Button>
          </a>
        )}
      </div>
      {type === "doctors" ? (
        <div className={classes.available}>
          {available && <div className={classes.status}>Available Now</div>}
        </div>
      ) : (
        <div className={classes.status}>
          <div className={classes.location}>
            <p>{location}</p>
            <ion-icon name='location-outline'></ion-icon>
          </div>
          {(type === "food" || type === "ocl") && verified === "yes" ? (
            <Tag
              color='red-inverse'
              style={{
                marginRight: "0",
                borderRadius: "10px",
                paddingBottom: "1px",
              }}
              icon={<ClockCircleOutlined />}>
              Verified {ago}
            </Tag>
          ) : (
            (homeTest === "yes" || waitTime !== null && type==="lab") && (
              <>
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: 'rgb(88,228,88)',
                    width: "170px",
                    padding: "5px  10px",
                    display: "flex",
                    alignItems:"center"
                  }}>
                  <CheckCircleOutlined style={{ color: "white", marginRight: "5px" }} /><p style={{ color: "white", marginBottom: "0px", fontSize: "12px" }}>Home Test - {homeTest ? homeTest : waitTime}</p>
                </div>
              </>
            )
          )}
        </div>
      )}
    </div>
  );
}



InfoCard.defaultProps={
  name:"",
  phone:"",
  type:"",
  location:"",
  verified:null,
  available:null,
  timeSlots:null,
  ago:"",
  isFree:null,
  charges:"",
  homeTest:null,
  waitTime:null,
  resultTime:null
}
