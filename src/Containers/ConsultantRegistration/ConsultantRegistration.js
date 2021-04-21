import React from 'react'
import classes from "../../Containers/RegistrationForm.module.css"
import { Col, Row,Input,Radio,Button,Select } from 'antd'

const { Option } = Select;

export default function ConsultantRegistration() {
    return (
        <>
        <div className={classes.body}>
            <div className={classes.formTitle}>
                <h1>Register As A Donor</h1>
            </div>
            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
        <div>
            <div className={classes.formField}>
                <p className={classes.title}>
                    name
                </p>
                <Input type='text'   className={classes.inputField} placeholder="Enter your Name"  />
            </div>
            <div className={classes.formField}>
                <p className={classes.title}>
                    sex
                </p>
                <Radio.Group buttonStyle="solid" size='large' className={classes.radioGroup}>
                    <Radio.Button className={classes.radioButton} value="male">Male</Radio.Button>
                    <Radio.Button className={classes.radioButton} value="female">Female</Radio.Button>
                    <Radio.Button className={classes.radioButton} value="others">Others</Radio.Button>
                </Radio.Group>

            </div>
            <div className={classes.formField}>
                <p className={classes.title}>
                    mobile number
                </p>
                <Input type='number'   className={classes.inputField} placeholder="Enter your Mobile Number"  />
            </div>
            <div className={classes.formField}>
                <p className={classes.title}>
                    select your state
                </p>
                
                

            </div>
        </div>
        <Button block className={classes.Button}>
                        Register Now
                    </Button>
        </Col>
        </Row>
        </div>

        
    </>
    )
}
