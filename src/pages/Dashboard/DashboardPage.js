import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
import PatientDashBoard from './components/PatientDashBoard';
import DoctorDashBoard from './components/DoctorDashBoard';

function DashboardPage() {
  const user = useSelector((state) => state.homeReducer.user);
  return (
    <div>
      <Header />
      <div style={{ padding: 50 }}>
        {user.type === 'patient' ? <PatientDashBoard /> : <DoctorDashBoard />}
      </div>
    </div>
  );
}

export default DashboardPage;
