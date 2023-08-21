import {OfferPreviewsData, OfferFullData, ReviewsData} from '../types';

type AppData = {
  allOffers: OfferPreviewsData;
  isAllOffersDataLoading: boolean;
  nearbyOffers: OfferPreviewsData;
  offer: OfferFullData | null;
  isOfferDataLoading: boolean;
  comments: ReviewsData;
  hasAllOffersError: boolean;
}

export default AppData;
