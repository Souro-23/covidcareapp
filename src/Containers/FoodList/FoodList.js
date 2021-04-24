import React, { useState, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row, Select , Spin, Empty } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import {locations} from '../../Constants/location'
import { LoadingOutlined } from '@ant-design/icons';
import "firebase/firestore";

var db = firebase.firestore();

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;


export default function FoodList() {
  const [completeFoodList, setCompleteFoodList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    var foodArr = [];
    db.collection("Food")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          foodArr.push(doc.data());
        });
        setLoadingData(false)
        setCompleteFoodList(foodArr);
        setFoodList(foodArr);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onLocationChange = (value) => {
    var foodArr = completeFoodList.filter(
      (food) => food.location === value
    );
    setFoodList(foodArr);
  };

  return (
    <div className={classes.body}>
      <div className={classes.formTitle}>
        <h1>Food Delivery</h1>
      </div>
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
        {!foodList.length && !loadingData && <Empty description="Food Supplier Not Found In This Region"/>}
        {loadingData && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
