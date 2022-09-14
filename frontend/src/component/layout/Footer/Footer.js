import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img
          alt='playstore'
          src={require('C:/Users/Lenovo/Desktop/Ecommerce/frontend/src/component/Images/playstore.png')}
        />
        <img
          alt='Appstore'
          src={require('C:/Users/Lenovo/Desktop/Ecommerce/frontend/src/component/Images/Appstore.png')}
        />
      </div>

      <div className='midFooter'>
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Nick</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow Us</h4>
        <a href='*'>Instagram</a>
        <a href='*'>Youtube</a>
        <a href='*'>Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
