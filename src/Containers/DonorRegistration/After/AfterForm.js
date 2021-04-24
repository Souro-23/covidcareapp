import React, { useState } from "react";
import classes from "../../RegistrationForm.module.css";
import {  Radio, Checkbox, DatePicker, Select } from "antd";




const { Option } = Select;

const bloodGroup = ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"];


export default function AfterForm({
    onBloodChange,
    onCovidPositiveChange,
    onDateChange,
    onCheckedHandler,
    onSubmitHandler,
    onSetvalidAge,
    onSetrecovered
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
                <hr style={{color:"gainsboro"}}/>
                <h3><b>COVID history details</b></h3>
                <br />
                
                
                <p><b>
                    Your Age Is Between 18-60?
                    </b></p>
                <Radio.Group
                    size='large'
                    buttonStyle="solid"
                    className={classes.radioGroup}
                    onChange={(e) => onSetvalidAge(e.target.value)}>
                    <Radio.Button className={classes.radioButton} value={true}>
                        Yes 
                            </Radio.Button>
                    <Radio.Button className={classes.radioButton} value={false}>
                        No
                            </Radio.Button>
                </Radio.Group>
                <br />
                <br />
                <p><b>
                    Did you ever get Covid?
                    </b></p>
                <Radio.Group
                    size='large'
                    buttonStyle="solid"
                    onChange={(e) => onCovidPositiveChange(e.target.value)}>
                    <Radio.Button className={classes.radioButton} value={true}>
                        Yes
                            </Radio.Button>
                    <Radio.Button className={classes.radioButton} value={false}>
                        No
                            </Radio.Button>
                </Radio.Group>

                <br />
                <br />
                
                <p><b>
                    Have You Fully Recovered And Free Of Symptoms For 14 Days?
                    </b></p>
                <Radio.Group
                    buttonStyle="solid"
                    size='large'
                    onChange={(e) => onSetrecovered(e.target.value)}>
                    <Radio.Button className={classes.radioButton} value={true}>
                        Yes
                            </Radio.Button>
                    <Radio.Button className={classes.radioButton} value={false}>
                        No
                            </Radio.Button>
                </Radio.Group>
                <br />
                <br />
                <p><b>Date of Screening</b></p>
                <DatePicker style={{width:"100%", height:"2.5rem"}}
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
                        <br />
                <br />
            </div>
        </div>
    )
}
