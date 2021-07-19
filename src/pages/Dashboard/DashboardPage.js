import React from 'react';
import { useSelector } from 'react-redux';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import PatientDashBoard from './components/PatientDashBoard';
import DoctorDashBoard from './components/DoctorDashBoard';

const useStyles = makeStyles(() => ({
  root: {
    width: 80,
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  icon: { marginRight: 10 },
  dropdownOption: {
    fontWeight: 'bold',
    padding: '10px 10px',
  },
}));

function DashboardPage() {
  const classes = useStyles();
  const user = useSelector((state) => state.homeReducer.user);
  const [filter, setFilter] = React.useState('all');

  return (
    <div>
      <Header />
      <div style={{ marginLeft: 55, marginTop: 30 }}>
        <InputLabel id="demo-simple-select-label">Filter by status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          disableUnderline
          value={filter}
          classes={{
            root: classes.root,
            icon: classes.icon,
          }}
          style={{
            border: '1px solid #EBF0F1',
            borderRadius: 15,
            padding: '3px 20px',
            marginTop: 10,
          }}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="booked">Booked</MenuItem>
          <MenuItem value="cancelled">Cancelled</MenuItem>
        </Select>
      </div>
      <div style={{ padding: 50 }}>
        {user.type === 'patient' ? (
          <PatientDashBoard filter={filter} />
        ) : (
          <DoctorDashBoard filter={filter} />
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
