import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row } from "antd";
import "firebase/firestore";

import FormHeader from "../../Components/FormHeader/FormHeader";
import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";

export default function HospitalBedsList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const windowHeight = window.innerHeight + 500;
  return (
    <div className={classes.body} style={{ height: windowHeight }}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Hospital Beds'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>
      <InfiniteScroll database='HospitalBeds' />
    </div>
  );
}
