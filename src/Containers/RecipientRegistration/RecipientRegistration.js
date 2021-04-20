import React, { useState } from "react";
import classes from "./RecipientRegistration.module.css";
import BeforeForm from "./Before/BeforeForm";
import AfterForm from "./After/AfterForm";

export default function PlasmaRecipientForm() {
  const [name, setname] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [state, setState] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [covidPositive, setCovidPositive] = useState(null);
  const [date, setDate] = useState(null);

  const [step, setStep] = useState(1);

  return <>{step === 0 ? <BeforeForm /> : <AfterForm />}</>;
}
