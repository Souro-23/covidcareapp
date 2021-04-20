import React from 'react'
import classes from './PlasmaModal.module.css'
import { Button, Select } from 'antd';

const { Option } = Select;

export default function PlasmaModal() {
    const  handleChange=value=> {
        console.log(`selected ${value}`);
      }
    return (
        <div className={classes.modalContent}>
                    <h1>Looking for Plasma Donor</h1>
                    <p>Which Blood Group
                     Are You Looking For</p>
                    <div className={classes.boodGroups}>
                        <div className={classes.bloodGroup}>
                            <p>A+</p>
                        </div>
                        <div className={classes.bloodGroup}>
                            <p>B+</p>
                        </div>
                        <div className={classes.bloodGroup}>
                            <p>0+</p>
                        </div>
                    </div>
                    <div className={classes.boodGroups}>
                        <div className={classes.bloodGroup}>
                            <p>AB+</p>
                        </div>
                        <div className={classes.bloodGroup}>
                            <p>A-</p>
                        </div>
                        <div className={classes.bloodGroup}>
                            <p>0-</p>
                        </div>
                    </div>
                    <div className={classes.boodGroups}>
                        <div className={classes.bloodGroup}>
                            <p>B-</p>
                        </div>
                        <div className={classes.bloodGroup}>
                            <p>AB-</p>
                        </div>
                    </div>
                    <p>Where Do You Wish To Avail  The Plasma</p>
                    <Select 
                    style={{ width: '100%' }}
                    suffixIcon={<ion-icon size="small" name="chevron-down-outline"></ion-icon>}  
                    
                    defaultValue="Delhi/NCR" 
                    onChange={handleChange}>
                        
                        <Option value="Delhi/NCR">Delhi/NCR</Option>
                        <Option value="Gurgaon">Gurgaon</Option>
                    </Select>
                    <br/><br/>
                    <Button block className={classes.actionButton}>
                            Show Results
                    </Button>
                </div>
    )
}
