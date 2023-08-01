import React from 'react';
import Rating from '../rating';
import {Review} from '../../types';

type ReviewProps = {
  data: Review;
}

const DATE_STRING_LENGTH = 10;

function ReviewItem({data}: ReviewProps): React.JSX.Element {
  const {
    date,
    user: {
      name,
      avatarUrl
    },
    comment,
    rating
  } = data;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating additionalClassName="reviews__rating" value={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date.slice(0, DATE_STRING_LENGTH)}>
          {new Date(date).toLocaleString('en-US', {month: 'long', year: 'numeric'})}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
