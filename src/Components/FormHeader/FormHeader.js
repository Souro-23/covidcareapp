import React from 'react'
import classes from './FormHeader.module.css'

export default function FormHeader({
    title,
    onBackPress
}) {
    return (
        <div className={classes.formTitle}>
            <ion-icon onClick={onBackPress} name="chevron-back-outline"></ion-icon>
            <h1>{title}</h1>     
        </div>
    )
}



