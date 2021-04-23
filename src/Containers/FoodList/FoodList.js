import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import classes from "../RegistrationForm.module.css";
import { Col, Row } from "antd";

const foodList = [
  {
    name: "Ritik Gupta",
    phone: "+91-80107080479",
    location: "Delhi",
  },
  {
    name: "Sourodeep ghosh roy",
    phone: "+941233588",
    location: "Delhi",
  },
  {
    name: "Jaya gaur",
    phone: "+9564665161",
    location: "Delhi",
  },
  {
    name: "Manas Srivastava",
    phone: "+9578626485",
    location: "Delhi",
  },
  {
    name: "Ritik Gupta",
    phone: "+91-80107080479",
    location: "Delhi",
  },
  {
    name: "Sourodeep ghosh roy",
    phone: "+941233588",
    location: "Delhi",
  },
  {
    name: "Jaya gaur",
    phone: "+9564665161",
    location: "Delhi",
  },
  {
    name: "Manas Srivastava",
    phone: "+9578626485",
    location: "Delhi",
  },
  {
    name: "Dr. XYZ",
    phone: "2646161646",
    location: "Delhi",
  },

  {
    name: "Jaya gaur",
    phone: "+9564665161",
    location: "Delhi",
  },
  {
    name: "Manas Srivastava",
    phone: "+9578626485",
    location: "Delhi",
  },
  {
    name: "Dr. XYZ",
    phone: "2646161646",
    location: "Delhi",
  },
];
export default function FoodList() {
  return (
    <div className={classes.body}>
      <div className={classes.formTitle}>
        <h1>Food Delivery</h1>
      </div>
      <Row justify='center' gutter={[8, 8]}>
        {foodList.map((food, index) => (
          <Col lg={7} md={8} sm={15} xs={24}>
            <InfoCard
              name={food.name}
              phone={food.phone}
              type='food'
              location={food.location}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
