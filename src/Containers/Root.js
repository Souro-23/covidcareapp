import React from "react";
import Home from "./Home/Home";
import DonorRegistration from "./DonorRegistration/DonorRegistration";
import RecipientRegistration from "./RecipientRegistration/RecipientRegistration";
import { Route, Switch } from "react-router-dom";
import DoctorsList from "./DoctorsList/DoctorsList";
import FoodList from "./FoodList/FoodList";
import OxygenCylinderList from "./OxygenCylinderList/OxygenCylinderList";

export default function Root() {
  return (
    <Switch>
      <Route exact path='/register/donor' component={DonorRegistration} />
      <Route
        exact
        path='/register/recipient'
        component={RecipientRegistration}
      />
      <Route exact path='/doctors' component={DoctorsList} />
      <Route exact path='/food' component={FoodList} />
      <Route exact path='/oxygenCylinders' component={OxygenCylinderList} />
      <Route path='/' component={Home} />
    </Switch>
  );
}
