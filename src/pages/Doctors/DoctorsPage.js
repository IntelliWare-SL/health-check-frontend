import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../common/Header';
import Filter from './components/Filter';
import DoctorsList from './components/DoctorsList';

function DoctorsPage() {
  return (
    <>
      <Header />
      <Grid container style={{ padding: '45px 100px' }}>
        <Grid xs={3} item>
          <Filter />
        </Grid>
        <Grid item xs={9} style={{ position: 'relative' }}>
          <DoctorsList />
        </Grid>
      </Grid>
    </>
  );
}

export default DoctorsPage;
