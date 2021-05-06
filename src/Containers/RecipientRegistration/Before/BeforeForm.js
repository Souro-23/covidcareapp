import React from "react";
import classes from "../../RegistrationForm.module.css";
import { Input, Radio, Button, Select } from "antd";
import states from "../../DonorRegistration/states.json";
import { locations } from '../../../Constants/location'

const { Option } = Select;

export default function BeforeForm({
  namePhoneHandler,
  onGenderChange,
  onLocationChange,
  onStepHandler,
}) {
  return (
    <>
      <div  >
        <div className={classes.formField}>
          <p className={classes.title}>name</p>
          <Input
            type='text'
            onChange={(e) => namePhoneHandler(e, "name")}
            className={classes.inputField}
            placeholder='Enter your Name'
          />
        </div>
        <div className={classes.formField}>
          <p className={classes.title}>sex</p>
          <Radio.Group
            size='large'
            buttonStyle="solid"
            onChange={(e) => onGenderChange(e.target.value)}
            className={classes.radioGroup}>
            <Radio.Button className={classes.radioButton} value='male'>
              Male
              </Radio.Button>
            <Radio.Button className={classes.radioButton} value='female'>
              Female
              </Radio.Button>
            <Radio.Button className={classes.radioButton} value='others'>
              Others
              </Radio.Button>
          </Radio.Group>
        </div>
        <div className={classes.formField}>
          <p className={classes.title}>mobile number</p>
          <Input
            type='number'
            onChange={(e) => namePhoneHandler(e, "mobileNumber")}
            className={classes.inputField}
            placeholder='Enter your Mobile Number'
          />
        </div>
        <div className={classes.formField}>
          <p className={classes.title}>What’s your location?</p>
          <Select
            listHeight={570}
            placeholder='Select Location'
            style={{ width: "100%" }}
            onChange={onLocationChange}>
            {locations.map((loc) => {
              return <Option value={loc}>{loc}</Option>;
            })}
          </Select>
        </div>
      </div>
      <Button
        onClick={() => onStepHandler(1)}
        block
        className={classes.Button}>
        Continue
        </Button>
    </>
  );
}
