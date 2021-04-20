import React, { useState } from "react";
import classes from "../RecipientRegistration.module.css";
import { Row, Radio, Checkbox, Col, DatePicker } from "antd";

const bloodGroup = ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"];

export default function AfterForm() {
  const [selected, setSelected] = useState(-1);
  const onSelect = (val) => {
    console.log(val, "hello", selected);
    setSelected(val);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className={classes.after}>
      <Row justify='center'>
        <Col md={12} xs={20}>
          <div className={classes.bloodGroupContainer}>
            <p>What Blood Group is required?</p>
            <div className={classes.bloodGroups}>
              {bloodGroup.map((bg, index) => {
                if (index < 4)
                  return (
                    <div
                      onClick={() => onSelect(index)}
                      className={
                        selected === index
                          ? `${classes.bloodGroup} ${classes.selected}`
                          : `${classes.bloodGroup}`
                      }>
                      <p>{bg}</p>
                    </div>
                  );
              })}
            </div>
            <div className={classes.bloodGroups}>
              {bloodGroup.map((bg, index) => {
                if (index > 3)
                  return (
                    <div
                      onClick={() => onSelect(index)}
                      className={
                        selected === index
                          ? `${classes.bloodGroup} ${classes.selected}`
                          : `${classes.bloodGroup}`
                      }>
                      <p>{bg}</p>
                    </div>
                  );
              })}
            </div>
            <p>What’s your location?</p>
            <p>
              Do you have a covid-19 positive report ( rapid antigen test or RT
              PCR) within six months of day of donation ?
            </p>
            <Radio.Group defaultValue='a' size='large'>
              <Radio.Button className={classes.covidPositive} value={true}>
                Yes
              </Radio.Button>
              <Radio.Button className={classes.covidPositive} value={false}>
                No
              </Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <p>Date of Screening</p>
            <DatePicker onChange={onChange} />
            <br />
            <Checkbox className={classes.checkbox} onChange={onChange}>
              I affirm, that the above provided Information are correct in my
              knowledge
            </Checkbox>
          </div>
        </Col>
      </Row>
    </div>
  );
}
