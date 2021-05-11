import React, { useEffect, useState } from "react";
import { Button } from "antd";
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
  resultTime,
  streetNumber,
  facility,
  medicines,
  bedsInfo,
}) {
  const [info, setInfo] = useState(null);
  const [badge, setBadge] = useState(null);
  const [medicinesList, setMedicinesList] = useState(medicines.split(","));
  useEffect(() => {
    setInfo(categorizeDataInfo());
    setBadge(categorizeDataBade());
    // console.log("Heello", medicines.split(","));
    // setMedicinesList(medicines.split(","));
  }, []);

  const categorizeDataInfo = () => {
    if (type === "Doctors") {
      return "";
    }
    if (type === "Food") {
      return (
        <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
          {isFree}
        </p>
      );
    }
    if (type === "OxygenCylinders") {
      return "";
    }
    if (type === "LabTestCenters") {
      return (
        <>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            Charge - &#x20B9;{charges}
          </p>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            <b>Test Result: </b> {resultTime}
          </p>
        </>
      );
    }
    if (type === "HomeCare") {
      return (
        <>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            {streetNumber}
          </p>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            <b>Facility: </b> {facility}
          </p>
        </>
      );
    }
    if (type === "HospitalBeds") {
      return (
        <>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            {streetNumber}
          </p>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            <b>Beds: </b> {bedsInfo}
          </p>
        </>
      );
    }
    if (type === "MedicalStores") {
      return (
        <>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            {streetNumber}
          </p>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            <b>Medicines: </b>
            {medicinesList.map((md, index) => (
              <li key={index}>{md}</li>
            ))}
          </p>
        </>
      );
    }
  };

  const categorizeDataBade = () => {
    if (type === "Food" && verified === "yes") {
      return (
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
      );
    }
    if (type === "OxygenCylinders" && verified === "yes") {
      return (
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
      );
    }
    if (type === "LabTestCenters" && waitTime !== "" && waitTime !== null) {
      return (
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "rgb(88,228,88)",
            width: "170px",
            padding: "5px  10px",
            display: "flex",
            alignItems: "center",
          }}>
          <CheckCircleOutlined style={{ color: "white", marginRight: "5px" }} />
          <p
            style={{
              color: "white",
              marginBottom: "0px",
              fontSize: "12px",
            }}>
            Home Test - {waitTime}
          </p>
        </div>
      );
    }
    if (
      type === "HospitalBeds" ||
      type === "MedicalStores" ||
      type === "HomeCare"
    ) {
      return (
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
      );
    }
  };
  return (
    <div className={classes.infoCard}>
      <div className={classes.details}>
        <div className={classes.nameAndPhone}>
          <p>{name}</p>
          <p style={{ color: "rgb(88,228,88)" }}>{phone}</p>
          {info}
        </div>
        {type === "Doctors" ? (
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
            <Button
              disabled={phone === ""}
              className={classes.Button}
              style={phone === "" ? { opacity: "0.5" } : {}}>
              Call Now
            </Button>
          </a>
        )}
      </div>
      {type === "Doctors" ? (
        <div className={classes.available}>
          {available && <div className={classes.status}>Available Now</div>}
        </div>
      ) : (
        <div className={classes.status}>
          <div className={classes.location}>
            {location !== "" && location !== null ? (
              <>
                <p>{location}</p>
                <ion-icon name='location-outline'></ion-icon>
              </>
            ) : (
              ""
            )}
          </div>
          {badge}
        </div>
      )}
    </div>
  );
}

InfoCard.defaultProps = {
  name: "",
  phone: "",
  type: "",
  location: "",
  verified: null,
  available: null,
  timeSlots: null,
  ago: "",
  isFree: null,
  charges: "",
  homeTest: null,
  waitTime: null,
  resultTime: null,
  medicines: "",
  bedsInfo: "",
  facility: "",
};
