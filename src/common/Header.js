import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { formsOpenClose, logOutUser } from '../pages/Home/redux/homeActions';
import RegisterForm from '../pages/Home/components/RegisterForm';
import LoginForm from '../pages/Home/components/LoginForm';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#00b074',
    borderRadius: 5,
    padding: '13px 0px',
    marginLeft: 25,
    width: 120,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'background-color 0.5s ease',
    '&:hover': {
      background: '#019563',
    },
  },
  container: {
    boxSizing: 'content-box',
    width: '100%',
    height: 80,
    display: 'flex',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    letterSpacing: 1,
  },
  btnContainer: {
    display: 'flex',
    marginRight: 40,
    fontSize: 14,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  headerItem: {
    cursor: 'pointer',
    '&:hover': {
      paddingTop: 10,
      borderTop: '2px solid #00b074',
    },
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.homeReducer.idToken);
  const [scrollY, setScrollY] = React.useState(0);
  const history = useHistory();

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, []);

  const strollToTop = () => {
    window.scrollTo(0, 0);
  };

  const openLoginForm = () => {
    dispatch(formsOpenClose({ loginFormOpen: true, RegisterFormOpen: false }));
  };

  const openSignUpForm = () => {
    dispatch(formsOpenClose({ loginFormOpen: false, RegisterFormOpen: true }));
  };

  const logoutThisUser = () => {
    dispatch(logOutUser());
    history.push('/');
  };

  return (
    <>
      <div style={{ height: 80, display: scrollY > 200 ? 'block' : 'none' }} />
      <div className={`${scrollY > 200 ? 'sticky' : ''} ${classes.container}`}>
        <div
          onClick={strollToTop}
          style={{ marginLeft: 20, cursor: 'pointer' }}
        >
          <img style={{ height: 45 }} alt="logo" src={logoImage} />
        </div>
        <div className={classes.btnContainer}>
          <div
            onClick={() => history.push('/')}
            className={classes.headerItem}
            style={{ marginRight: 30 }}
          >
            HOME
          </div>
          <div
            onClick={() => history.push('/doctors')}
            className={classes.headerItem}
            style={{ marginRight: 30 }}
          >
            DOCTORS
          </div>
          <div className={classes.headerItem}>SUPPORT</div>
          <Divider
            style={{ margin: '0px 25px' }}
            component="div"
            orientation="vertical"
            flexItem
          />
          {!idToken ? (
            <>
              <div className={classes.headerItem} onClick={openLoginForm}>
                LOG IN
              </div>
              <div className={classes.btn} onClick={openSignUpForm}>
                SIGN UP
              </div>
            </>
          ) : (
            <>
              <div className={classes.headerItem} onClick={logoutThisUser}>
                LOG OUT
              </div>
              <div
                className={classes.btn}
                onClick={() => history.push('/dashboard')}
              >
                Dashboard
              </div>
            </>
          )}
        </div>
      </div>
      <RegisterForm />
      <LoginForm />
    </>
  );
}

export default Header;
