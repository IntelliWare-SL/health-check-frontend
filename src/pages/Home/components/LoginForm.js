import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { formsOpenClose, loginUser } from '../redux/homeActions';
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
  roleSelector: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 500,
    fontSize: 20,
  },
}));

function RegisterForm() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [role, setRole] = React.useState('patient');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginFormOpen = useSelector((state) => state.homeReducer.loginFormOpen);
  const loading = useSelector((state) => state.homeReducer.loading);

  const closeThisDialog = () => {
    dispatch(formsOpenClose({ loginFormOpen: false }));
  };

  const openRegDialog = () => {
    dispatch(formsOpenClose({ loginFormOpen: false, RegisterFormOpen: true }));
  };

  const loginThisUser = () => {
    dispatch(loginUser({ email, password, type: role }));
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      open={loginFormOpen}
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
              Welcome Back
            </div>
            <div>Log in to continue your account and explore.</div>
          </div>
        </Grid>

        <Grid item xs={7} style={{ padding: '100px 40px' }}>
          <div>
            <div className={classes.roleSelector}>
              <div
                style={{
                  cursor: 'pointer',
                  borderBottom: role === 'patient' && '2px solid red',
                  paddingBottom: 8,
                  transition: 'border 0.6s ease',
                }}
                onClick={() => setRole('patient')}
              >
                Patient
              </div>
              <div
                style={{
                  cursor: 'pointer',
                  borderBottom: role === 'doctor' && '2px solid red',
                  paddingBottom: 8,
                  transition: 'border 0.6s ease-in',
                }}
                onClick={() => setRole('doctor')}
              >
                Doctor
              </div>
            </div>
            <div style={{ marginBottom: 15, fontWeight: 'bold' }}>E-Mail</div>
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
              style={{ marginBottom: 15, fontWeight: 'bold', marginTop: 30 }}
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
              <div>
                <div onClick={loginThisUser} className={classes.btn}>
                  LOG IN
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: 30 }}>
                Don’t have an account?{' '}
                <span
                  onClick={openRegDialog}
                  style={{ color: '#00B074', cursor: 'pointer' }}
                >
                  Create a free account
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
