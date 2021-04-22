import React, { useState } from "react";
import classes from "../../RegistrationForm.module.css";
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
  loading
}) {
  const [selected, setSelected] = useState(-1);
  const onSelect = (val) => {
    setSelected(val);
    onBloodChange(bloodGroup[val]);
  };

  return (
    <div className={classes.after}>
          <div className={classes.bloodGroupContainer}>
            <p><b>What Blood Group is required?</b></p>
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
            <p><b>What’s your location?</b></p>
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
            <p><b>
              Do you have a covid-19 positive report ( rapid antigen test or RT
              PCR) within six months of day of donation ?
              </b>
            </p>
            <Radio.Group
              defaultValue='a'
              size='large'
              buttonStyle="solid"
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
            <p><b>Date of Screening</b></p>
            <DatePicker
              style={{width:"100%", height:"2.5rem"}}
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
          <Button loading={loading} block className={classes.Button} onClick={onSubmitHandler}>
            Register Now
          </Button>
    </div>
  );
}
