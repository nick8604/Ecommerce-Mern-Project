import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search({ history }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : '/products');
  };

  return (
    <Fragment>
      <form className='searchBox' onSubmit={searchSubmitHandler}>
        <input
          type='text'
          placeholder='Search a Product ...'
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type='submit' value='Search' />
      </form>
    </Fragment>
  );
}

export default Search;
