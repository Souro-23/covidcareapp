import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select, Spin } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import { LoadingOutlined } from "@ant-design/icons";
import "firebase/firestore";
import { checkVerified } from "../DoctorsList/functions";
import FormHeader from '../../Components/FormHeader/FormHeader'

var db = firebase.firestore();

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;

export default function FoodList(props) {
  const [completeFoodList, setCompleteFoodList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    var foodArr = [];
    db.collection("Food")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          foodArr.push(doc.data());
        });
        setCompleteFoodList(checkVerified(foodArr));
        setFoodList(checkVerified(foodArr));
        setLoadingData(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    var foodArr = completeFoodList.filter((food) => food.location === value);
    setFoodList(foodArr);
  };

  return (
    <div className={classes.body}>
      <Row justify="center" >
          <Col lg={8} sm={16} xs={23}>
            <FormHeader title="Food Delivery" onBackPress={() => props.history.push('/')} />

          </Col>
        </Row>
      <div className={classes.select}>
        <Select
          placeholder='Select Location'
          style={{ width: "100%" }}
          showSearch
          onChange={onLocationChange}>
          {locations.map((loc) => {
            return <Option value={loc}>{loc}</Option>;
          })}
        </Select>
      </div>
      <Row justify='center' gutter={[8, 8]}>
        {foodList.map((food, index) => (
          <Col key={index} lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={food.name}
              phone={food.phone}
              type='food'
              location={food.location}
              verified={food.verified}
            />
          </Col>
        ))}
        {!foodList.length && !loadingData && (
          <p>Food Supplier Not Found In This Region</p>
        )}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
