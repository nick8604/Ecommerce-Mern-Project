import React from 'react';
import './CardItem.css';
import { Link } from 'react-router-dom';

function CardItem({ item, deleteCartItems }) {
  return (
    <div className='CartItemCard'>
      <img src={item.Image} alt='ssa' />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
}

export default CardItem;
