import React ,{useState} from 'react'
import classes from '../DonorRegistration.module.css'
import { Col, Row,Input,Radio,Button,Select } from 'antd'
import states from '../states.json'

export default function BeforeForm() {
    const { Option } = Select;
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');

    const manageName = (value) => {
        console.log("name" , value);
        setName(value);
    };

    const manageGender = (value) => {
        console.log("value" , value.target.value);
        setGender(value);
    };

    const manageNumber = (value) => {
        console.log("number" , value);
        setNumber(value);
    };

    const manageState = (value) => {
        console.log("state" , value);
        setState(value);
    };

    return (
        <>
         {/* <Row justify='center'>
            <Col sm={24} xs={24}>
                <div className={classes.headerBox}>
                    <span  className={classes.header}>Register As A Donor</span>
                </div>
            </Col>
        </Row> */}
        <Row  className={classes.formBox}>
            <div style={{width:'100vw'}}>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        name
                    </p>
                    <Input type='text'  onChange={manageName} className={classes.inputField} placeholder="Enter your Name"  />
                </div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        sex
                    </p>
                    <Radio.Group size='large'  onChange={manageGender} className={classes.radioGroup}>
                        <Radio.Button className={classes.radioButton} value="male">Male</Radio.Button>
                        <Radio.Button className={classes.radioButton} value="female">Female</Radio.Button>
                        <Radio.Button className={classes.radioButton} value="others">Others</Radio.Button>
                    </Radio.Group>

                </div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        mobile number
                    </p>
                    <Input type='number'  onChange={manageNumber} className={classes.inputField} placeholder="Enter your Mobile Number"  />
                </div>
                <div className={classes.formField}>
                    <p className={classes.title}>
                        select your state
                    </p>
                    
                    <Select  placeholder="Select state" style={{ width: '100%' }} onChange={manageState}>
                    {states.map(state => {
                        return(
                            <Option value={state.key}>{state.name}</Option>
                        )})
                    }    
                    </Select>

                </div>
            </div>
            <Button block className={classes.Button}>
                Continue
            </Button>
        </Row>

            
        </>
    )
}
