import React, { useState, useEffect } from "react";
import classes from "../RegistrationForm.module.css";
import { Button, Col, Input, message, Row } from "antd";
import firebase from "../../Firebase/FirebaseConfig";
import "firebase/firestore";
import check from "./GetTiming"
import sunrise from "./images/sunrise.svg";
import sun from "./images/sun (2).svg";
import moon from "./images/moon.svg";
import evening from "./images/eve.svg"
import FormHeader from "../../Components/FormHeader/FormHeader";


const slots = [
    { time: "6am - 12pm", session: "Morning", count: "1", image: sunrise },
    { time: "12pm - 6pm", session: "Afternoon", count: "2", image: sun },
    { time: "6pm - 12am", session: "Evening", count: "3", image: evening },
    { time: "12am - 6am", session: "Night", count: "4", image: moon },
];

var db = firebase.firestore();


export default function ConsultantRegistration(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [name, setName] = useState("");
    const [whatsappNo, setWhatsappNo] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [MCINumber, setMCINumber] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [slot, setSlot] = useState(slots);
    const [consultTime, setConsultTime] = useState([]);
    const [loading, setLoading] = useState(false)

    const consultTimeHandler = (count) => {
        setConsultTime(check(count))
    }
    const onChangeHandler = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "mobileNumber") {
            setMobileNumber(e.target.value);
        } else if (type === "whatsappNo") {
            setWhatsappNo(e.target.value);
        }
        else if (type === "MCINumber") {
            setMCINumber(e.target.value);
        } else if (type === "specialization") {
            setSpecialization(e.target.value);
        }
    };
    const consultTimeSelector = (Index) => {
        let newstate = consultTime.map((item, index) => {
            if (index == Index) {
                return {
                    t: item.t,
                    sess: item.sess,
                    selected: !item.selected,
                    tFormat: item.tFormat
                }
            }
            return item
        })
        setConsultTime(newstate)
    }
    const submitHandler = () => {
        if (name === "") return message.error("Name Required");
        if (whatsappNo === "" || whatsappNo.length !== 10) return message.error("Fill a valid Whatsapp Number");
        if (MCINumber === "") return message.error("MCINumber Required");
        if (specialization === "") return message.error("Specialization Required")
        if (consultTime.length === 0) return message.error("Please Fill The Slot")

        var consultTimeArry = [];
        for (var i = 0; i < consultTime.length; i++) {
            if (consultTime[i].selected) {
                consultTimeArry.push(consultTime[i].tFormat);
            }
        }
        if (consultTimeArry.length === 0) {
            message.error("Please select the slot");
        }
        setLoading(true)

        db.collection("Doctors")
            .add({
                name: name,
                whatsappNo: whatsappNo,
                MCINumber: MCINumber,
                phone: mobileNumber,
                specialization: specialization,
                consultTime: consultTimeArry.join(','),
                timestamp: new Date()
            })
            .then((docRef) => {
                setLoading(false)
                props.history.push('/consultant-registered/'+docRef.id)
            })
            .catch((error) => {
                setLoading(false)
                message.error("Something went wrong")
            });
    };


    return (
        <div className={classes.body}>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={23}>
                    <FormHeader title="Register As A Counsellor/Doctor" onBackPress={() => props.history.push('/')} />
                </Col>
            </Row>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <h2><b>Basic Details</b></h2>
                </Col>
            </Row>
            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField}>
                        <p className={classes.title}>name</p>
                        <Input
                            type='text'
                            onChange={(e) => onChangeHandler(e, "name")}
                            className={classes.inputField}
                            placeholder='Enter your Name'
                        />
                    </div>
                    <div className={classes.formField}>
                        <p className={classes.title}>whatsapp number</p>
                        <Input
                            type='number'
                            onChange={(e) => onChangeHandler(e, "whatsappNo")}
                            className={classes.inputField}
                            placeholder='Enter your Mobile Number'
                        />
                    </div>
                    <div className={classes.formField}>
                        <p className={classes.title}>alternative phone number <small style={{ color: "grey" }}>(optional)</small></p>
                        <Input
                            type='number'
                            onChange={(e) => onChangeHandler(e, "mobileNumber")}
                            className={classes.inputField}
                            placeholder='Enter your Mobile Number'
                        />
                    </div>
                </Col>
            </Row>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <br />
                    <h2><b>Occupational details</b></h2>
                </Col>
            </Row>

            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField}>
                        <p className={classes.title}>MCI NUMBER</p>
                        <Input
                            type='number'
                            onChange={(e) => onChangeHandler(e, "MCINumber")}
                            className={classes.inputField}
                            placeholder='Enter your MCI Number'
                        />
                    </div>
                    <div className={classes.formField}>
                        <p>In What You Specialize?</p>
                        <Input
                            type='text'
                            onChange={(e) => onChangeHandler(e, "specialization")}
                            className={classes.inputField}
                            placeholder='Select your specialization'
                        />
                    </div>

                </Col>
            </Row>
            <Row justify="center" >
                <Col lg={8} sm={16} xs={20}>
                    <br />
                    <h2><b>Availability Details</b></h2>
                </Col>
            </Row>
            <Row justify="center" >
                <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                    <div className={classes.formField} style={{ height: "auto" }} >
                        <p>Select a slot when You Will Be Available For Consultation ?</p>
                        <Row gutter={[10, 10]}>
                            {slot.map((slot, index) => (
                                <Col key={index} span={8}>
                                    <div className={classes.timeSlot} onClick={() => consultTimeHandler(slot.count)} style={{ width: "100%", textAlign: "center", backgroundColor: "#A8A8A829", border: "1px solid #C9C9C9", borderRadius: "3px" }} >
                                        <img src={slot.image} />
                                        <p style={{ marginBottom: "0", fontWeight: "bold", fontSize: '11px', padding: '0 .3rem ' }}>{slot.time}</p>
                                        <small style={{ margin: '0' }}>{slot.session}</small>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>

                {consultTime.length ?
                    <Col className={classes.formBox} lg={8} sm={16} xs={23}>
                        <div className={classes.formField} style={{ height: "auto" }} >
                            <p>What will be time for consultation ?</p>
                            <Row gutter={[10, 10]}>
                                {consultTime.map((t, index) => (
                                    <Col key={index} span={8}>
                                        <div onClick={() => consultTimeSelector(index)} className={t.selected ? classes.selectedtimeSlot : classes.timeSlot} style={{ width: "100%", textAlign: "center", backgroundColor: "#A8A8A829", border: "1px solid #C9C9C9", borderRadius: "3px" }} >
                                            <p style={{ marginBottom: "0", fontWeight: "bold", fontSize: '11px', padding: '0 .3rem ' }}>{t.t}</p>
                                            <small style={{ margin: '0' }}>{t.sess}</small>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                    :
                    null
                }


            </Row>
            <br />
            <Row justify="center" >
                <Col lg={8} sm={16} xs={23}>
                    <Button
                        block
                        loading={loading}
                        onClick={submitHandler}
                        className={classes.Button}>
                        Register Now
                        </Button>
                </Col>
            </Row>
            <br /><br />

        </div>

    )
}
