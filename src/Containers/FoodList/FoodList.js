import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import { Col, Row } from "antd";

import "firebase/firestore";
import FormHeader from "../../Components/FormHeader/FormHeader";
import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";



export default class FoodList extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
  const windowHeight =window.innerHeight+500
  console.log(windowHeight)
  return (
    <div className={classes.body} style={{height:windowHeight}}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='Food Delivery'
            onBackPress={() => this.props.history.push("/")}
          />
        </Col>
      </Row>
      <InfiniteScroll database="Food"/>
    </div>
  );
  }
}







