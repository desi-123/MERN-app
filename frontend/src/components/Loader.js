import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      className='spinner-border text-info'
      style={{
        width: '50px',
        height: '50px',
        margin: 'auto',
        display: 'block',
      }}
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
