import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <>
      <Form onSubmit={submitHandler} inline className='search'>
        <input
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='What are you looking for?'
          className='m-1'
        />
        <button type='submit' variant='outline-light'>
          <i className='fa fa-search' />
        </button>
      </Form>
    </>
  );
};

export default SearchBox;
