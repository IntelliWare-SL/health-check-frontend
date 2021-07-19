import React from 'react';
import logoImage from '../../../assets/logo.png';

// component for displaying the name health check in the home page
const MyComponent = () => {
  return (
    <div>
      <div
        style={{
          height: 'calc(100vh - 60px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 85,
            letterSpacing: 15,
            textShadow: '1px 1px 2px #000',
            textAlign: 'center',
          }}
        >
          <div>
            <img style={{ height: 200 }} alt="logo" src={logoImage} />
          </div>
          <div>
            <span style={{ color: '#057db1' }}>Health</span>
            <span style={{ color: '#eb1d21' }}> Check</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
