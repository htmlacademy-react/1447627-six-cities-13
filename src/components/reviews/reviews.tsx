import React from 'react';
import ReviewForm from '../review-form';
import ReviewsList from '../reviews-list';
import {Review} from '../../types';

type ReviewsProps = {
  additionalClassName?: string;
  reviews: Review[];
}

const REVIEWS_MAX_COUNT = 10;

const sortReviewsByDate = (reviews: Review[]) => reviews
  .slice()
  .sort(
    (a: Review, b: Review) => +new Date(b.date) - +new Date(a.date)
  );

function Reviews({additionalClassName, reviews}: ReviewsProps): React.JSX.Element {
  return(
    <section className={`reviews ${additionalClassName || ''}`}>
      {reviews?.length && (
        <>
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ReviewsList reviews={sortReviewsByDate(reviews).slice(0, REVIEWS_MAX_COUNT)} />
        </>
      )}
      <ReviewForm />
    </section>
  );
}

export default Reviews;
