import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import logoImage from '../../../assets/logo.png';

const useStyles = makeStyles(() => ({
  container: {
    background: '#1d292e',
    padding: '60px 50px',
    marginTop: 50,
    color: 'white',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: 5,
          textShadow: '1px 1px 2px #000',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <img alt="log" src={logoImage} style={{ height: 50 }} />
          <div>
            <span style={{ color: '#057db1' }}>Health</span>
            <span style={{ color: '#eb1d21' }}> Check</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 25 }}>Contact Us</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          <ForumOutlinedIcon style={{ fontSize: 55 }} />
          <div
            style={{
              marginLeft: 20,
            }}
          >
            <div>+94 76 123 12334</div>
            <div style={{ color: 'rgb(0, 176, 116)', marginTop: 3 }}>
              healthcheckbooking@outlook.com
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 600,
            marginTop: 25,
            marginLeft: 30,
          }}
        >
          Follow us on : <FacebookIcon style={{ marginLeft: 10 }} />
          <TwitterIcon style={{ marginLeft: 10 }} />
          <LinkedInIcon style={{ marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
