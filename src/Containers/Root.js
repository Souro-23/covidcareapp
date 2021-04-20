import React from 'react'
import Home from './Home/Home'
import DonorRegistration from './DonorRegistration/DonorRegistration'
import RecipientRegistration from './RecipientRegistration/RecipientRegistration'
import {Route , Switch}  from 'react-router-dom'


export default function Root() {
    return (
       
        <Switch>
            <Route exact path="/register/donor" component= {DonorRegistration}/>
            <Route exact path="/register/recipient" component= {RecipientRegistration}/>
            <Route path="/" component ={Home}/>          
        </Switch>    
        
    )
}
