import React from 'react';
import ReviewForm from '../review-form';
import ReviewsList from '../reviews-list';
import {ReviewData, ReviewsData} from '../../types';
import {CommentsSortingType} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';
import {AuthorizationStatus} from '../../const';

type ReviewsProps = {
  additionalClassName?: string;
  data: ReviewsData;
  maxCount?: number;
  sortingType?: CommentsSortingType;
}

const sortReviews = (data: ReviewsData, type: CommentsSortingType) => {
  switch (type) {
    case CommentsSortingType.DateDecrease:
      return data.slice().sort((a: ReviewData, b: ReviewData) => +new Date(b.date) - +new Date(a.date));
    default:
      return data;
  }
};

function Reviews({additionalClassName, data, maxCount, sortingType}: ReviewsProps): React.JSX.Element {
  let reviews = data;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (sortingType) {
    reviews = sortReviews(reviews, sortingType);
  }

  if (maxCount) {
    reviews = reviews.slice(0, maxCount);
  }

  return(
    <section className={`reviews ${additionalClassName || ''}`}>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{data.length}</span>
      </h2>
      {reviews && <ReviewsList reviews={reviews} />}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Reviews;
