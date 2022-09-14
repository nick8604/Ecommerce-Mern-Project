import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import Home from './component/Home/Home';
import Search from './component/Product/Search';

import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import LoginSignUp from './component/Users/LoginSignUp';
import store from './store';
import { loadUser } from './actions/useraction';
import UserOption from './component/layout/Header/UserOption';
import { useSelector } from 'react-redux';
import Profile from './component/Users/Profile';
import UpdatedProfile from './component/Users/updatedProfile';
import UpdatePassword from './component/Users/UpdatePassword';
import ForgotPassword from './component/Users/ForgotPassword';
import ResetPassword from './component/Users/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/Admin/Dashboard';
import ProductList from './component/Admin/ProductList';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UsersList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
/* import ProtectedRoute from './component/Route/ProctedRoute'; */

export default function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    const { data } = await axios.get('/api/v1/stripeapikey');

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOption user={user} />}

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/account' element={<Profile />} />
        <Route exact path='/me/update' element={<UpdatedProfile />} />
        <Route exact path='/password/update' element={<UpdatePassword />} />
        <Route exact path='/password/forgot' element={<ForgotPassword />} />
        <Route
          exact
          path='/password/reset/:token'
          element={<ResetPassword />}
        />
        <Route exact path='/login' element={<LoginSignUp />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/shipping' element={<Shipping />} />
        <Route exact path='/order/confirm' element={<ConfirmOrder />} />
        <Route exact path='/success' element={<OrderSuccess />} />
        <Route exact path='/orders' element={<MyOrders />} />
        <Route exact path='/order/:id' element={<OrderDetails />} />

        <Route exact path='/admin/dashboard' element={<Dashboard />} />
        <Route exact path='/admin/products' element={<ProductList />} />
        <Route exact path='/admin/product' element={<NewProduct />} />
        <Route exact path='/admin/product/:id' element={<UpdateProduct />} />
        <Route exact path='/admin/orders' element={<OrderList />} />
        <Route exact path='/admin/order/:id' element={<ProcessOrder />} />
        <Route exact path='/admin/users' element={<UsersList />} />
        <Route exact path='/admin/user/:id' element={<UpdateUser />} />
        <Route exact path='/admin/reviews' element={<ProductReviews />} />

        {stripeApiKey && (
          <Route
            path='/process/payment'
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />{' '}
              </Elements>
            }
          />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}
