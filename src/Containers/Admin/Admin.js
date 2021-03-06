import React, { useEffect } from "react";
import { Route } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";
import FoodTable from "./FoodTable";
import DoctorTable from "./DoctorTable";
import PatientTable from "./PatientTable";
import DonorsTable from "./DonorsTable";
import RecipientTable from "./RecipientTable";
import OxygenCylinders from "./OxygenCylinders";
import { Layout, Menu, Button } from "antd";
import "./Admin.css";
import { NavLink } from "react-router-dom";
import LabTestCentersTable from "./LabTestCentersTable";
import OxygenCylinderContacts from "./OxygenCylinderContacts";
import BreathingSessions from "./BreathingSessions";
import HomeCare from "./HomeCareTable";
import HospitalBeds from "./HospitalBedsTable";
import MedicalStores from "./MedicalStoresTable";
import AmbulanceTable from "./AmbulanceTable";

const { Header, Content, Footer } = Layout;

export default function Admin(props) {
  const { currentUser, logout } = useAuth();

  const chechState = () => {
    if (!localStorage.getItem("user")) {
      console.log("not loged in");
      props.history.push("/login");
    }
  };
  useEffect(() => {
    chechState();
  }, []);

  const onLogout = () => {
    logout();
    props.history.push("/login");
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
          <Menu.Item key='1'>
            <NavLink to='/admin/food'>Food Suppliers</NavLink>
          </Menu.Item>
          <Menu.Item key='2'>
            <NavLink to='/admin/doctors'>Doctors</NavLink>
          </Menu.Item>
          <Menu.Item key='3'>
            <NavLink to='/admin/patient'>Patients</NavLink>
          </Menu.Item>
          <Menu.Item key='4'>
            <NavLink to='/admin/recipient'>Recipients</NavLink>
          </Menu.Item>
          <Menu.Item key='5'>
            <NavLink to='/admin/donors'>Donors</NavLink>
          </Menu.Item>
          <Menu.Item key='6'>
            <NavLink to='/admin/oxygen-cylinder'>
              Oxygen Cylinder Suppliers
            </NavLink>
          </Menu.Item>
          <Menu.Item key='7'>
            <NavLink to='/admin/labtestcenters'>Lab Test Centers</NavLink>
          </Menu.Item>
          <Menu.Item key='8'>
            <NavLink to='/admin/OxygenCylinderContacts'>Oxygen Cylinder Contacts</NavLink>
          </Menu.Item>
          <Menu.Item key='9'>
            <NavLink to='/admin/BreathingSessions'>Breathing Sessions</NavLink>
          </Menu.Item>
          <Menu.Item key='10'>
            <NavLink to='/admin/HospitalBeds'>Hospital Beds</NavLink>
          </Menu.Item>
          <Menu.Item key='11'>
            <NavLink to='/admin/MedicalStores'>Medical Stores</NavLink>
          </Menu.Item>
          <Menu.Item key='12'>
            <NavLink to='/admin/HomeCare'>HomeCare</NavLink>
          </Menu.Item>
          <Menu.Item key='13'>
            <NavLink to='/admin/Ambulance'>Ambulance</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className='site-layout'
        style={{ padding: "0 50px", marginTop: 64 }}>
        <br />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button className='LogoutButton' onClick={onLogout}>
            logout
          </Button>
        </div>
        <Route path='/admin/food' component={FoodTable} />
        {/* SECTION Below admin section  */}
        <Route path='/admin/doctors' component={DoctorTable} />
        <Route path='/admin/patient' component={PatientTable} />
        <Route path='/admin/oxygen-cylinder' component={OxygenCylinders} />
        <Route path='/admin/donors' component={DonorsTable} />
        <Route path='/admin/recipient' component={RecipientTable} />
        <Route path='/admin/labtestcenters' component={LabTestCentersTable} />
        <Route path='/admin/BreathingSessions' component={BreathingSessions} />
        <Route path='/admin/OxygenCylinderContacts' component={OxygenCylinderContacts} />
        <Route path='/admin/HospitalBeds' component={HospitalBeds} />
        <Route path='/admin/MedicalStores' component={MedicalStores} />
        <Route path='/admin/HomeCare' component={HomeCare} />
        <Route path='/admin/Ambulance' component={AmbulanceTable} />

      </Content>
    </Layout>
  );
}
