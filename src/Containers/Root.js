import React from "react";
import Home from "./Home/Home";
import { Redirect, Route, Switch } from "react-router-dom";

// Registartion Forms
import DonorRegistration from "./DonorRegistration/DonorRegistration";
import RecipientRegistration from "./RecipientRegistration/RecipientRegistration";
import ConsultantRegistration from "./ConsultantRegistration/ConsultantRegistration";
import PatientRegistration from "./PatientRegistration/PatientRegistration";

import SubmitPageDonor from "../Components/SubmitPage/SubmitPageDonor";
import SubmitPageRecipient from "../Components/SubmitPage/SubmitPageRecipient";
import SubmitPageConsultant from "../Components/SubmitPage/SubmitPageConsultant";
import SubmitPagePatient from "../Components/SubmitPage/SubmitPagePatient";
import DoctorsList from "./DoctorsList/DoctorsList";
import FoodList from "./FoodList/FoodList";
import OxygenCylinderList from "./OxygenCylinderList/OxygenCylinderList";
import FoodRegistration from "./FoodRegistration/FoodRegistration";
import OxygenCylinderRegistration from "./OxygenCylinderRegistration/OxygenCylinderRegistration";
import SubmitPageFoodSupply from "../Components/SubmitPage/SubmitPageFoodSupply";
import SubmitPageOxygen from "../Components/SubmitPage/SubmitPageOxygen";
import SubmitPageDonateO2 from "../Components/SubmitPage/SubmitPageDonateO2";
import SubmitPageBreathingSession from "../Components/SubmitPage/SubmitPageBreathingSession";

import Login from "./Admin/Login";
import { AuthProvider } from "../Contexts/AuthContext";
import Admin from "./Admin/Admin";
import LabTestCentersList from "./LabTestCenters/LabTestCentersList";
import FreeO2CylinderRegistration from "./DonateO2Form/DonateO2form";
import BreathingSessionRegistration from "./BreathingSessionRegistrations/BreathingSessionRegistration";
import SaturationList from "./SaturationList/SaturationList";
import LabTestCentersRegistration from "./LabTestCentersRegistration/LabTestCentersRegistration";
import MedicalStoresList from "./MedicalStoresList/MedicalStoresList";
import HospitalBedsList from "./HospitalBedsList/HospitalBedsList";
import HomeCareList from "./HomeCareList/HomeCareList";
import AmbulanceList from "./AmbulanceList.js/AmbulanceList";

export default function Root() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/register/donor' component={DonorRegistration} />
        <Route
          exact
          path='/register/recipient'
          component={RecipientRegistration}
        />
        <Route
          exact
          path='/register/consultant'
          component={ConsultantRegistration}
        />
        <Route exact path='/register/patient' component={PatientRegistration} />
        <Route exact path='/register/food-suply' component={FoodRegistration} />
        <Route
          exact
          path='/register/Oxygen-cylinders-supply'
          component={OxygenCylinderRegistration}
        />
        <Route
          exact
          path='/register/donate-o2-cylinders'
          component={FreeO2CylinderRegistration}
        />
        <Route
          exact
          path='/register/breating-session'
          component={BreathingSessionRegistration}
        />
        <Route
          exact
          path='/register/lab-test-centers'
          component={LabTestCentersRegistration}
        />

        <Route path='/donor-registered/:docId' component={SubmitPageDonor} />
        <Route
          path='/recipient-registered/:docId'
          component={SubmitPageRecipient}
        />
        <Route
          path='/consultant-registered/:docId'
          component={SubmitPageConsultant}
        />
        <Route
          path='/patient-registered/:docId'
          component={SubmitPagePatient}
        />

        <Route
          path='/oxygen-cylinder-registered/:docId'
          component={SubmitPageOxygen}
        />
        <Route
          path='/food-supply-registered/:docId'
          component={SubmitPageFoodSupply}
        />
        <Route
          path='/Donate-o2Cylinder-registered/:docId'
          component={SubmitPageDonateO2}
        />
        <Route
          path='/breathing-session-registered/:docId'
          component={SubmitPageBreathingSession}
        />

        <Route exact path='/doctors' component={DoctorsList} />
        <Route exact path='/food' component={FoodList} />
        <Route exact path='/oxygenCylinders' component={OxygenCylinderList} />
        <Route exact path='/labtestcenters' component={LabTestCentersList} />
        <Route exact path='/medicalStores' component={MedicalStoresList} />
        <Route exact path='/hospitalBeds' component={HospitalBedsList} />
        <Route exact path='/homeCare' component={HomeCareList} />
        <Route exact path='/ambulance' component={AmbulanceList} />
        <Route exact path='/freeconsultation' component={SaturationList} />

        <Route path='/login' component={Login} />

        <Route path='/admin' component={Admin} />

        <Route path='/' component={Home} />
      </Switch>
    </AuthProvider>
  );
}
