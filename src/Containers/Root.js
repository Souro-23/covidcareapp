import React from 'react'
import Home from './Home/Home'
import { Route, Switch } from 'react-router-dom'

// Registartion Forms
import DonorRegistration from './DonorRegistration/DonorRegistration'
import RecipientRegistration from './RecipientRegistration/RecipientRegistration'
import ConsultantRegistration from './ConsultantRegistration/ConsultantRegistration'
import PatientRegistration from './PatientRegistration/PatientRegistration'



import SubmitPageDonor from '../Components/SubmitPage/SubmitPageDonor'
import SubmitPageRecipient from '../Components/SubmitPage/SubmitPageRecipient'
import SubmitPageConsultant from '../Components/SubmitPage/SubmitPageConsultant'
import SubmitPagePatient from '../Components/SubmitPage/SubmitPagePatient'
import DoctorList from './DoctorsList/DoctorList'


export default function Root() {
    return (

        <Switch>
            <Route exact path="/register/donor" component={DonorRegistration} />
            <Route exact path="/register/recipient" component={RecipientRegistration} />
            <Route exact path="/register/consultant" component={ConsultantRegistration} />
            <Route exact path="/register/patient" component={PatientRegistration} />
            <Route path="/donor-registered" component={SubmitPageDonor} />
            <Route path="/recipient-registered" component={SubmitPageRecipient} />
            <Route path="/consultant-registered" component={SubmitPageConsultant} />
            <Route path="/patient-registered" component={SubmitPagePatient} />
            <Route path="/doctorlist" component={DoctorList} />
            <Route path="/" component={Home} />

        </Switch>

    )
}
