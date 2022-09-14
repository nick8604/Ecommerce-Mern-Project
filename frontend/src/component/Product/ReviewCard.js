import { Rating } from '@material-ui/lab';
import React from 'react';

const ReviewCard = ({ review }) => {
  const options = {
    size: 'large',
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className='reviewCard'>
      <img alt='User' />
      <p>{review.name}</p>
      <Rating {...options} />
      <br />
      <span className='reviewCardComment'>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
