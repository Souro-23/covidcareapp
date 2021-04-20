import React, { useState } from "react";
import classes from "../RecipientRegistration.module.css";
import { Row, Col } from "antd";
export default function AfterForm() {
  const bloodGroup = ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"];

  const [selected, setSelected] = useState(-1);
  const onSelect = (val) => {
    console.log(val, "hello", selected);
    setSelected(val);
  };
  return (
    <div>
      <Row justify='center'>
        <Col xs={20}>
          <div className={classes.bloodGroups}>
            {bloodGroup.map((bg, index) => (
              <div
                onClick={() => onSelect(index)}
                className={
                  selected === index
                    ? `${classes.bloodGroup} ${classes.selected}`
                    : `${classes.bloodGroup}`
                }>
                <p>{bg}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
