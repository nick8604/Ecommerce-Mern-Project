import './Home.css';
import React, { Fragment, useEffect } from 'react';
import ProductCard from './ProductCard';
import Loader from '../layout/Loader/Loader';
import { clearErrors, getproduct } from '../../actions/productaction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import Images from '../Images/backgroundimage.jpg';

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getproduct());
  }, [alert, dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='banner' style={{ backgroundImage: `url(${Images})` }}>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
              <button>Scroll</button>
            </a>
          </div>

          <h2 className='homeHeading'>Featured Products</h2>

          <div className='container' id='container'>
            {products &&
              products.map((product, id) => (
                <ProductCard key={id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
