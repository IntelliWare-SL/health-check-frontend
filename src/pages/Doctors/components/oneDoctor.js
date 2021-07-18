import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Divider, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import moment from 'moment';
import { toast } from 'react-toastify';
import { oneDoctorOpenClose, placeAppointment } from '../redux/doctorsActions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: 550,
    padding: 0,
    minHeight: 400,
  },
  leftPart: {
    background: '#1d292e',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    minHeight: 400,
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: 5,
    border: '1px solid gray',
    padding: '12px 15px',
    color: 'gray',
    fontSize: 16,
    '&:focus': {
      outline: 'none',
    },
  },
  btn: {
    background: '#00b074',
    marginTop: 30,
    borderRadius: 5,
    padding: '13px 0px',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    fontSize: 13,
    transition: 'background-color 0.5s ease',
    '&:hover': {
      background: '#019563',
    },
  },
  roleSelector: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 500,
    fontSize: 20,
  },
}));

function OneDoctor(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [selectedTimeslotID, setSelectedTimeslotID] = React.useState('');
  const oneDoctorOpen = useSelector(
    (state) => state.doctorsReducer.oneDoctorOpen
  );
  const idToken = useSelector((state) => state.homeReducer.idToken);
  const doctor = useSelector((state) => state.doctorsReducer.doctorDetails);
  const oneDoctorLoading = useSelector(
    (state) => state.doctorsReducer.oneDoctorLoading
  );
  const placeOrderLoading = useSelector(
    (state) => state.doctorsReducer.placeOrderLoading
  );

  const url =
    'https://www.pngkey.com/png/detail/24-248941_doctors-and-nurses-png-image-de-doctor.png';

  const closeThisDialog = () => {
    setSelectedTimeslotID('');
    dispatch(oneDoctorOpenClose(false));
  };

  const radioButtonChanged = (e) => {
    setSelectedTimeslotID(e.target.value);
  };

  const placeAnAppointment = () => {
    if (!idToken) {
      toast.error('You need to login before place appointments');
    } else if (!selectedTimeslotID) {
      toast.error('Please select a timeslot');
    } else {
      dispatch(
        placeAppointment({
          doctorId: doctor._id,
          timeslotId: selectedTimeslotID,
        })
      );
    }
  };

  return (
    <Dialog
      open={oneDoctorOpen}
      onClose={closeThisDialog}
      maxWidth={false}
      classes={{ paper: classes.paper }}
      TransitionComponent={Transition}
    >
      <Grid container>
        <Grid
          item
          xs={5}
          className={classes.leftPart}
          style={{
            padding: '60px 100px',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {!oneDoctorLoading && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: 30 }}>
                <Avatar
                  style={{ height: 150, width: 150, display: 'inline-block' }}
                  alt="Remy Sharp"
                  src={url}
                />
              </div>
              <div style={{ fontSize: 30, marginBottom: 10, fontWeight: 500 }}>
                {doctor.name}
              </div>
              <div>{doctor.field}</div>
              <div
                style={{
                  marginTop: 30,
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
          )}
        </Grid>

        <Grid
          item
          xs={7}
          style={{
            padding: '50px 40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%' }}>
            {!oneDoctorLoading ? (
              <>
                {Object.keys(doctor.timeSlots).length > 0 && (
                  <div style={{ marginBottom: 25, fontWeight: 600 }}>
                    Available Time Slots
                  </div>
                )}

                <div>
                  {Object.keys(doctor.timeSlots).map((key, index) => (
                    <React.Fragment key={`one-doctor-${index}-${doctor._id}`}>
                      {index !== 0 && (
                        <Divider style={{ margin: '15px 0px', width: '85%' }} />
                      )}
                      <Grid container spacing={2}>
                        <Grid
                          xs={3}
                          item
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <div>
                            <div
                              style={{ textAlign: 'center', fontWeight: 500 }}
                            >
                              <div>{moment(key).format('Do')}</div>
                              <div style={{ fontSize: 22 }}>
                                {moment(key).format('MMM')}
                              </div>
                              <div>{moment(key).format('YYYY')}</div>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <div>
                            {doctor.timeSlots[key].map((timeSlot, index2) => (
                              <div
                                key={`one-doc-timeslots-${timeSlot.startTime}-${timeSlot.endTime}-${index2}-${index}`}
                                style={{
                                  marginTop: index2 !== 0 ? 12 : 0,
                                  display: 'flex',
                                }}
                              >
                                <div
                                  style={{
                                    width: 155,
                                    textDecoration: !timeSlot.availability
                                      ? 'line-through'
                                      : '',
                                  }}
                                >
                                  {moment(timeSlot.startTime).format('h:mm a')}{' '}
                                  - {moment(timeSlot.endTime).format('h:mm a')}
                                </div>
                                <div>
                                  <input
                                    type="radio"
                                    id="html"
                                    disabled={!timeSlot.availability}
                                    name="fav_language"
                                    value={timeSlot.timeslotId}
                                    onChange={radioButtonChanged}
                                    style={{
                                      margin: '0px 0px 0px 15px',
                                      cursor: 'pointer',
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  ))}
                </div>

                <div>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {Object.keys(doctor.timeSlots).length > 0 ? (
                    !placeOrderLoading ? (
                      <>
                        <div
                          className={classes.btn}
                          onClick={placeAnAppointment}
                        >
                          PlACE AN APPOINTMENT
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ textAlign: 'center', marginTop: 60 }}>
                          <CircularProgress style={{ color: 'red' }} />
                        </div>
                      </>
                    )
                  ) : (
                    <div style={{ textAlign: 'center', color: 'red' }}>
                      No Time Slots Available
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: oneDoctorLoading ? 0 : 60,
                  }}
                >
                  <CircularProgress style={{ color: 'red' }} />
                </div>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default OneDoctor;
