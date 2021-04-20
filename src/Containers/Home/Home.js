import { Button, Col, Row } from 'antd'
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'
import classes from './Home.module.css'
import { Select } from 'antd';
import PlasmaModal from '../../Components/PlasmaModal/PlasmaModal';

const { Option } = Select;

export default function Home() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    

    return (
        <>
            <Row >
                <Col sm={24} xs={24}>
                    <div className={classes.title}>
                        <h1 >NCRfightsCOVID’19</h1>
                    </div>
                </Col>
            </Row>
            <br />
            <Row justify="center" >
                <Col sm={16} xs={20}>
                    <div className={classes.introCard}>
                        <p>We are helping connect the <span><b>donors</b></span> with the <span><b>recipients</b></span> during this tough COVID pandemic times</p>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row justify="center" gutter={[32, 32]}>
                <Col lg={8} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <h1>Relax!</h1>
                        <p> Let us know what you’re looking for?</p>
                        <Button block className={classes.actionButton} onClick={showModal}>
                            I am looking for Plasma Donors
                </Button>
                        <Button block className={classes.actionButton2}>
                            I am looking for Plasma Donors
                </Button>
                    </div>

                </Col>
                <Col lg={8} md={11} sm={11} xs={20}>
                    <div className={classes.actionCard}>
                        <h1>People Need Your Help, Urgently!</h1>
                        <p> How can you help?</p>
                        <Button block className={classes.actionButton}>
                            I want to donate Plasma
                </Button>
                        <Button block className={classes.actionButton2}>
                            I can help as a consultant/doctor
                </Button>
                        <Button block className={classes.actionButton2}>
                            I want to volunteer/help
                </Button>
                    </div>

                </Col>
            </Row>
            <Modal
                title={null}
                className={classes.modal}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                closeIcon={<ion-icon name="close-outline"></ion-icon>}>
                <PlasmaModal />
            </Modal>
        </>
    )
}
