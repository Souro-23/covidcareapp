import React from 'react'
import { Form,Row , Col, Input, Button, Checkbox, message } from 'antd';
import classes from "../RegistrationForm.module.css";
import { useAuth } from '../../Contexts/AuthContext';



export default function Login(props) {


    const { login } = useAuth()
    const onFinish = (values) => {
        console.log('Success:', values);
        login(values.username, values.password).then(res=>{
            localStorage.setItem("user", res.user.uid)
            props.history.push("/admin")
        })
        .catch(err=>{
            console.log(err)
            message.error(err.message)
        })
        

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row justify="center">
            <Col className={classes.formBox}  lg={7}>
                <Form  
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input className={classes.inputField} placeholder="Username or Email" />
                    </Form.Item>

                    <Form.Item    
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className={classes.inputField} placeholder="Password" />
                    </Form.Item>
                    <br/>
                    <br/>
                    
                    <Form.Item >
                        <Button className={classes.Button} block type="primary" htmlType="submit">
                            Submit
          </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        </>
    );
};
