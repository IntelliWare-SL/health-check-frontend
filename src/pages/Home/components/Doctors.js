import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../../Doctors/redux/doctorsActions';

const useStyles = makeStyles(() => ({
  container: {
    boxSizing: 'content-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 50,
  },
  card: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: 20,
    borderRadius: 5,
    cursor: 'pointer',
  },
}));

function Doctors() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  // this method get all the doctors and filter first 6 to dispplay in the home page
  const get6Doctors = useSelector((state) =>
    state.doctorsReducer.allDoctors.slice(0, 5)
  );

  // fetch all the doctors from the backend
  React.useEffect(() => {
    dispatch(getDoctors());
  }, []);

  // dummy image of the doctor used in the application
  const url =
    'https://www.pngkey.com/png/detail/24-248941_doctors-and-nurses-png-image-de-doctor.png';

  return (
    <div className={classes.container}>
      <Grid container spacing={2} justifyContent="center">
        {get6Doctors.map((doctor, index) => (
          <Grid key={`${doctor._id}-${index}`} item xs={2}>
            <div className={classes.card}>
              <Avatar
                style={{ height: 100, width: 100, display: 'inline-block' }}
                alt="Remy Sharp"
                src={url}
              />
              <div style={{ fontWeight: 'bold', marginTop: 10 }}>
                {doctor.name}
              </div>
              <div style={{ fontSize: 14 }}>{doctor.field}</div>
            </div>
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          <div onClick={() => history.push('/doctors')}>See More</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Doctors;
