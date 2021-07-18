import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getDoctors, getSelectedDoctor } from '../redux/doctorsActions';
import OneDoctor from './oneDoctor';
import { formsOpenClose } from '../../Home/redux/homeActions';

const useStyles = makeStyles(() => ({
  card: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: 20,
    padding: 20,
    background: '#ffff',
    borderRadius: 5,
    boxShadow: '0px 0px 5px gray',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 0px 5px 0px black',

      background: '#f8f7f7',
    },
  },
}));

function DoctorsList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const allDoctors = useSelector((state) => state.doctorsReducer.allDoctors);
  const loading = useSelector((state) => state.doctorsReducer.loading);

  React.useEffect(() => {
    dispatch(getDoctors());
  }, []);

  const setSelectedDoctor = (doctor) => {
    dispatch(getSelectedDoctor({ doctor }));
  };

  const url =
    'https://www.pngkey.com/png/detail/24-248941_doctors-and-nurses-png-image-de-doctor.png';

  return (
    <div style={{ padding: '0px 40px' }}>
      {!loading ? (
        <>
          <div style={{ marginBottom: 20 }}>
            Click the doctor to get more info
          </div>
          {allDoctors.map((doctor, index) => (
            <div
              onClick={() => setSelectedDoctor(doctor)}
              className={classes.card}
              key={`${index}-${doctor._id}`}
            >
              <div style={{ display: 'flex' }}>
                <div>
                  <Avatar
                    style={{ height: 100, width: 100, display: 'inline-block' }}
                    alt="Remy Sharp"
                    src={url}
                  />
                </div>
                <div
                  style={{
                    marginLeft: 35,
                    display: 'flex',
                    alignItems: 'center',
                    width: 360,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 25, fontWeight: 450 }}>
                      {doctor.name}
                    </div>
                    <div style={{ marginTop: 5 }}>{doctor.field}</div>
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: 5,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 5,
                      }}
                    >
                      <PhoneIcon
                        style={{
                          marginRight: 10,
                        }}
                      />
                      +94 76 123 1234
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <EmailOutlinedIcon
                        style={{
                          marginRight: 10,
                        }}
                      />
                      {doctor.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <CircularProgress style={{ color: 'red' }} />
          </div>
        </>
      )}
      <OneDoctor />
    </div>
  );
}

export default DoctorsList;
