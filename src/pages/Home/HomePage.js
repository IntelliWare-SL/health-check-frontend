import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { getData } from './redux/homeActions';
import Header from '../../common/Header';
import Main from './components/Main';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import Services from './components/Services';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function HomePage() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const name = useSelector((state) => state.homeReducer.name);

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
    dispatch(getData());
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            'linear-gradient(90deg,rgba(0,176,116,.1) 0,rgba(88,88,0,.05))',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <Main />
      </div>

      <Doctors />
      <Divider />
      <Services />
      <Footer />
    </>
  );
}

export default HomePage;
