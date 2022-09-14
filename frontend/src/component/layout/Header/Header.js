import React from 'react';

function Header() {
  return (
    <div class='header'>
      <a href='/' alt='E-commerce'>
        E-commerce
      </a>
      <div class='header-right'>
        <a href='/search'>Search</a>
        <a href='/login' alt='login'>
          login
        </a>

        <a href='/products'>Product</a>
      </div>
    </div>
  );
}

export default Header;
