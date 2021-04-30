import React from 'react'
import Home from './Home/Home'
import { Redirect, Route, Switch } from 'react-router-dom'

// Registartion Forms
import DonorRegistration from './DonorRegistration/DonorRegistration'
import RecipientRegistration from './RecipientRegistration/RecipientRegistration'
import ConsultantRegistration from './ConsultantRegistration/ConsultantRegistration'
import PatientRegistration from './PatientRegistration/PatientRegistration'



import SubmitPageDonor from '../Components/SubmitPage/SubmitPageDonor'
import SubmitPageRecipient from '../Components/SubmitPage/SubmitPageRecipient'
import SubmitPageConsultant from '../Components/SubmitPage/SubmitPageConsultant'
import SubmitPagePatient from '../Components/SubmitPage/SubmitPagePatient'
import DoctorsList from "./DoctorsList/DoctorsList";
import FoodList from "./FoodList/FoodList";
import OxygenCylinderList from "./OxygenCylinderList/OxygenCylinderList";
import FoodRegistration from './FoodRegistration/FoodRegistration'
import OxygenCylinderRegistration from './OxygenCylinderRegistration/OxygenCylinderRegistration'
import SubmitPageFoodSupply from '../Components/SubmitPage/SubmitPageFoodSupply'
import SubmitPageOxygen from '../Components/SubmitPage/SubmitPageOxygen'
import Login from './Admin/Login'
import { AuthProvider } from "../Contexts/AuthContext"
import Admin from './Admin/Admin'
import FoodTable from './Admin/FoodTable'
import LabsList from './LabsList/LabsList'




export default function Root() {

    
    return (
        <AuthProvider>

            <Switch>
                <Route exact path="/register/donor" component={DonorRegistration} />
                <Route exact path="/register/recipient" component={RecipientRegistration} />
                <Route exact path="/register/consultant" component={ConsultantRegistration} />
                <Route exact path="/register/patient" component={PatientRegistration} />
                <Route exact path="/register/food-suply" component={FoodRegistration} />
                <Route exact path="/register/Oxygen-cylinders-supply" component={OxygenCylinderRegistration} />


                <Route path="/donor-registered/:docId" component={SubmitPageDonor} />
                <Route path="/recipient-registered/:docId" component={SubmitPageRecipient} />
                <Route path="/consultant-registered/:docId" component={SubmitPageConsultant} />
                <Route path="/patient-registered/:docId" component={SubmitPagePatient} />

                <Route path="/oxygen-cylinder-registered/:docId" component={SubmitPageOxygen} />
                <Route path="/food-supply-registered/:docId" component={SubmitPageFoodSupply} />


                <Route exact path='/doctors' component={DoctorsList} />
                <Route exact path='/food' component={FoodList} />
                <Route exact path='/labs' component={LabsList} />
                <Route exact path='/oxygenCylinders' component={OxygenCylinderList} />

                <Route path='/login' component={Login} />

                <Route  path ="/admin" component={Admin}/>
 

                <Route path="/" component={Home} />



            </Switch>
        </AuthProvider>

    )
}
