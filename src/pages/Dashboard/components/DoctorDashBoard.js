import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  cancelAppointments,
  getDoctorAppointments,
  getPatientAppointments,
} from '../redux/dashboardActions';

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: 'rgb(255,255,255)',
    },
  },
}))(TableRow);

const useStyles = makeStyles(() => ({
  root: {
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  headerCell: {
    background: '#EBF0F1',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: 0.5,
    color: '#2B292B',
    textAlign: 'left',
    lineHeight: '20px',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dropdownOption: {
    fontWeight: 'bold',
    padding: '10px 10px',
  },
}));

function DoctorDashBoard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDoctorAppointments());
  }, []);

  const doctorAppointments = useSelector(
    (state) => state.dashboardReducer.doctorAppointments
  );

  const loading = useSelector((state) => state.dashboardReducer.loading);

  const changeAppointmentState = (e, _id) => {
    dispatch(cancelAppointments(_id));
  };

  return (
    <div
      style={{
        padding: 30,
        background: 'rgb(243, 247, 251)',
        borderRadius: 10,
      }}
    >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>ID</TableCell>
              <TableCell className={classes.headerCell}>Patient Name</TableCell>
              <TableCell className={classes.headerCell}>History</TableCell>
              <TableCell className={classes.headerCell}>Date</TableCell>
              <TableCell className={classes.headerCell}>Time Slot</TableCell>
              <TableCell className={classes.headerCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <StyledTableRow>
                <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                  <CircularProgress style={{ color: 'red' }} />
                </TableCell>
              </StyledTableRow>
            )}
            {!loading && doctorAppointments.length === 0 && (
              <StyledTableRow>
                <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                  No Appointments Available
                </TableCell>
              </StyledTableRow>
            )}
            {!loading &&
              doctorAppointments.map((appointment, index) => (
                <StyledTableRow key={`${appointment._id}-${index}`}>
                  <TableCell>{appointment._id}</TableCell>
                  <TableCell>{appointment.patientId.name}</TableCell>
                  <TableCell>{appointment.patientId.history}</TableCell>
                  <TableCell>
                    {moment(appointment.timeslotId.startTime).format(
                      'MMMM Do, YYYY'
                    )}
                  </TableCell>
                  <TableCell>
                    {moment(appointment.timeslotId.startTime).format('h:mm a')}{' '}
                    - {moment(appointment.timeslotId.endTime).format('h:mm a')}
                  </TableCell>
                  <TableCell style={{ textTransform: 'uppercase' }}>
                    {appointment.state === 'cancelled' ? (
                      <span style={{ color: '#F7685B', fontWeight: 600 }}>
                        {appointment.state}
                      </span>
                    ) : (
                      <Select
                        fullWidth
                        disableUnderline
                        name="cars"
                        id="cars"
                        onChange={(e) =>
                          changeAppointmentState(e, appointment._id)
                        }
                        value={appointment.state}
                        classes={{
                          root: classes.root,
                        }}
                        style={{
                          border: 0,
                          fontSize: 14,
                          textTransform: 'uppercase',
                          color:
                            appointment.state === 'cancelled'
                              ? '#F7685B'
                              : '#2DAC43',
                          fontWeight: 600,
                        }}
                      >
                        <MenuItem
                          className={classes.dropdownOption}
                          style={{ color: '#2DAC43' }}
                          value="booked"
                        >
                          <div>Booked</div>
                        </MenuItem>
                        <MenuItem
                          className={classes.dropdownOption}
                          style={{ color: '#F7685B' }}
                          value="cancelled"
                        >
                          <div>Cancel</div>
                        </MenuItem>
                      </Select>
                    )}
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DoctorDashBoard;
