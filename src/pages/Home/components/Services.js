import React from 'react';
import { Grid } from '@material-ui/core';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

function Services() {
  return (
    <div style={{ marginTop: 50, marginLeft: 30, marginRight: 30 }}>
      <Grid container>
        <Grid xs={6} item style={{ textAlign: 'center' }}>
          <img
            style={{ objectFit: 'cover', width: '80%', borderRadius: 10 }}
            alt="doctor"
            src="https://aawafi.com/uploads/partners/profile/doctor.jpg"
          />
        </Grid>
        <Grid
          xs={6}
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontWeight: 'bold', fontSize: 40 }}>Our Services</div>
            <div style={{ marginTop: 30, fontSize: 18, lineHeight: 2 }}>
              Health Booking Service you can access online, if you are
              registered you can access the system and book yourself an
              appointment with one of our highly experienced doctors.
            </div>
            <div style={{ marginTop: 50, lineHeight: 3 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                }}
              >
                <CheckRoundedIcon
                  style={{ color: '#00b074', marginRight: 20 }}
                />
                <div>Your Local Health Check</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                }}
              >
                <CheckRoundedIcon
                  style={{ color: '#00b074', marginRight: 20 }}
                />
                <div>Book Yourselves an appointment</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                }}
              >
                <CheckRoundedIcon
                  style={{ color: '#00b074', marginRight: 20 }}
                />
                <div>Experienced Doctors to Choose from</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                }}
              >
                <CheckRoundedIcon
                  style={{ color: '#00b074', marginRight: 20 }}
                />
                <div>Cancel or Change Appointments Anytime</div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
