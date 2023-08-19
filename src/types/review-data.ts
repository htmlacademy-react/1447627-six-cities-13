import ReviewContent from './review-content';

type ReviewData = ReviewContent & {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export default ReviewData;
