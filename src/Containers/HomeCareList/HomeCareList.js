import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select, Spin } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import { LoadingOutlined } from "@ant-design/icons";
import "firebase/firestore";
import { timeDifference } from "../DoctorsList/functions";
import FormHeader from "../../Components/FormHeader/FormHeader";

var db = firebase.firestore();

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;

export default function HomeCareList(props) {
  const [completeHomeCareList, setCompleteHomeCareList] = useState([]);
  const [homeCareList, setHomeCareList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [location, setLocation] = useState("");
  useEffect(() => {
    var homeCareArr = [];
    db.collection("HomeCare")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          homeCareArr.push({ ...doc.data(), ago: ago });
        });
        setCompleteHomeCareList(homeCareArr);
        setHomeCareList(homeCareArr);
        setLoadingData(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
      setHomeCareList(completeHomeCareList);
      setLocation(value);
      return;
    }
    var homeCareArr = completeHomeCareList.filter(
      (homeCare) => homeCare.location !== "" && homeCare.location === value
    );
    setHomeCareList(homeCareArr);
    setLocation(value);
  };

  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Home Care Facility'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>
      <div className={classes.select}>
        <Select
          placeholder='Select Location'
          style={{ width: "100%" }}
          listHeight={570}
          onChange={onLocationChange}>
          {locations.map((loc) => {
            return <Option value={loc}>{loc}</Option>;
          })}
        </Select>
      </div>
      <Row justify='center' gutter={[8, 8]}>
        {homeCareList.map((homeCare, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={homeCare.name}
              phone={homeCare.phone}
              location={homeCare.location}
              streetNumber={homeCare.streetNumber}
              ago={homeCare.ago}
              facility={homeCare.facility}
              type='HomeCare'
            />
          </Col>
        ))}
        {!homeCareList.length && !loadingData && (
          <p>Home Care Facility Not Found for {location}</p>
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
