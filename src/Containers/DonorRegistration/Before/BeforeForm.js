import React ,{useState} from 'react'
import classes from '../../RegistrationForm.module.css'
import { Col, Row,Input,Radio,Button,Select } from 'antd'
import states from '../states.json'

const { Option } = Select;
export default function BeforeForm({
    namePhoneHandler,
    onGenderChange,
    onStateChange,
    onStepHandler,
  }) {

    
    

    return (
        <>
            <div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        name
                    </p>
                    <Input type='text'  onChange={(e) => namePhoneHandler(e, "name")} className={classes.inputField} placeholder="Enter your Name"  />
                </div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        sex
                    </p>
                    <Radio.Group buttonStyle="solid" size='large'  onChange={(e) => onGenderChange(e.target.value)} className={classes.radioGroup}>
                        <Radio.Button className={classes.radioButton} value="male">Male</Radio.Button>
                        <Radio.Button className={classes.radioButton} value="female">Female</Radio.Button>
                        <Radio.Button className={classes.radioButton} value="others">Others</Radio.Button>
                    </Radio.Group>

                </div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        mobile number
                    </p>
                    <Input type='number'  onChange={(e) => namePhoneHandler(e, "mobileNumber")} className={classes.inputField} placeholder="Enter your Mobile Number"  />
                </div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        select your state
                    </p>
                    
                    <Select  placeholder="Select state" style={{ width: '100%' }} onChange={onStateChange}>
                    {states.map(state => {
                        return(
                            <Option value={state.key}>{state.name}</Option>
                        )})
                    }    
                    </Select>

                </div>
            </div>

            
        </>
    )
}
