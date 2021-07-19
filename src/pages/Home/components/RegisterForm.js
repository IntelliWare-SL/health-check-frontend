import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import { toast } from 'react-toastify';
import { formsOpenClose, registerUser } from '../redux/homeActions';
import logoImage from '../../../assets/logo.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  paper: {
    width: '55%',
    padding: 0,
  },
  leftPart: {
    background: '#1d292e',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: 5,
    border: '1px solid gray',
    padding: '10px 15px',
    color: 'gray',
    fontSize: 16,
    '&:focus': {
      outline: 'none',
    },
  },
  btn: {
    background: '#00b074',
    marginTop: 20,
    borderRadius: 5,
    padding: '13px 0px',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    fontSize: 13,
    transition: 'background-color 0.5s ease',
    '&:hover': {
      background: '#019563',
    },
  },
}));

function RegisterForm() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [history, setHistory] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const RegisterFormOpen = useSelector(
    (state) => state.homeReducer.RegisterFormOpen
  );
  const loading = useSelector((state) => state.homeReducer.loading);

  // close registration form
  const closeThisDialog = () => {
    dispatch(formsOpenClose({ RegisterFormOpen: false }));
  };

  // close registration form & open login form
  const openLoginDialog = () => {
    dispatch(formsOpenClose({ loginFormOpen: true, RegisterFormOpen: false }));
  };

  // register this user as a patient
  const RegisterThisUser = () => {
    if (moment().diff(dob, 'years') >= 18) {
      dispatch(
        registerUser({
          name,
          email,
          password,
          dob,
          history,
        })
      );
    } else {
      toast.error('You should be over 18 years old');
    }
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      open={RegisterFormOpen}
      onClose={closeThisDialog}
      maxWidth={false}
      classes={{ paper: classes.paper }}
    >
      <Grid container>
        <Grid
          item
          xs={5}
          className={classes.leftPart}
          style={{ padding: '0px 40px' }}
        >
          <div>
            <div style={{ textAlign: 'center', marginBottom: 30 }}>
              <img style={{ height: 100 }} alt="logo" src={logoImage} />
            </div>
            <div style={{ fontSize: 30, marginBottom: 20, fontWeight: 500 }}>
              Create a free account today
            </div>
            <div>Create your account to continue</div>
          </div>
        </Grid>

        <Grid item xs={7} style={{ padding: '60px 40px' }}>
          <div>
            <div style={{ marginBottom: 10, fontWeight: 'bold' }}>
              Your Name
            </div>
            <div>
              <input
                className={classes.input}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div
              style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 13 }}
            >
              Date of Birth
            </div>
            <div>
              <input
                type="date"
                className={classes.input}
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div
              style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 13 }}
            >
              Medical History
            </div>
            <div>
              <input
                className={classes.input}
                placeholder="Medical History"
                value={history}
                onChange={(e) => setHistory(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div
              style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 13 }}
            >
              E-Mail
            </div>
            <div>
              <input
                className={classes.input}
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div
              style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 13 }}
            >
              Password
            </div>
            <div>
              <input
                type="password"
                className={classes.input}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {!loading ? (
            <>
              {' '}
              <div>
                <div onClick={RegisterThisUser} className={classes.btn}>
                  REGISTER
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: 13 }}>
                Already have an account?{' '}
                <span
                  onClick={openLoginDialog}
                  style={{ color: '#00B074', cursor: 'pointer' }}
                >
                  Please login
                </span>
              </div>
            </>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginTop: 60 }}>
                <CircularProgress style={{ color: 'red' }} />
              </div>
            </>
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default RegisterForm;
