import React, { useState } from "react";
import classes from "../RecipientRegistration.module.css";
import { Row, Radio, Checkbox, Col, DatePicker, Button, Select } from "antd";

const { Option } = Select;

const bloodGroup = ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"];

const locations = [
  "North Delhi",
  "East Delhi",
  "South Delhi",
  "West Delhi",
  "Gurgaon",
  "Noida",
  "Ghaziabad",
];

export default function AfterForm({
  onBloodChange,
  onLocationChange,
  onCovidPositiveChange,
  onDateChange,
  onCheckedHandler,
  onSubmitHandler,
}) {
  const [selected, setSelected] = useState(-1);
  const onSelect = (val) => {
    setSelected(val);
    onBloodChange(bloodGroup[val]);
  };

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
            <Select
              placeholder='Select Location'
              style={{ width: "100%" }}
              onChange={onLocationChange}>
              {locations.map((loc) => {
                return <Option value={loc}>{loc}</Option>;
              })}
            </Select>
            <br />
            <br />
            <p>
              Do you have a covid-19 positive report ( rapid antigen test or RT
              PCR) within six months of day of donation ?
            </p>
            <Radio.Group
              defaultValue='a'
              size='large'
              onChange={(e) => onCovidPositiveChange(e.target.value)}>
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
            <DatePicker
              onChange={(date, dateString) => onDateChange(date, dateString)}
            />
            <br />
            <br />
            <Checkbox
              className={classes.checkbox}
              onChange={(e) => onCheckedHandler(e.target.checked)}>
              I affirm, that the above provided Information are correct in my
              knowledge
            </Checkbox>
          </div>
          <br />
          <Button block className={classes.Button} onClick={onSubmitHandler}>
            Register Now
          </Button>
        </Col>
      </Row>
    </div>
  );
}
