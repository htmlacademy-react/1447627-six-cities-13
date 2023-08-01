import React from 'react';
import ReviewItem from '../review-item/review-item';
import {Review} from '../../types';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): React.JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          data={review}
          key={review.id}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
