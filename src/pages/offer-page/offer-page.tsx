import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import Header from '../../components/header';
import Map from '../../components/map';
import Offers from '../../components/offers';
import Offer from '../../components/offer';
import Reviews from '../../components/reviews';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useNearbyOffersData from '../../hooks/use-nearby-offers-data';
import useCommentsData from '../../hooks/use-comments-data';
import Spinner from '../../components/spinner';
import useAppSelector from '../../hooks/use-app-selector';
import {fetchOfferAction} from '../../store/api-actions';
import {getOfferMarkersData} from '../../util';
import {NEARBY_OFFERS_COUNT, REVIEWS_MAX_COUNT} from './const';
import {CommentsSortingType} from '../../const';

function OfferPage(): React.JSX.Element {
  const params = useParams();
  const offerId = params.id as string;

  const offer = useAppSelector((state) => state.offer);
  const offerMarker = getOfferMarkersData(offer ? [offer] : []);
  const isOfferDataLoading = useAppSelector((state) => state.isOfferDataLoading);

  const comments = useCommentsData(offerId);

  const nearbyOffers = useNearbyOffersData(offerId, NEARBY_OFFERS_COUNT);
  const nearbyOffersMarkers = getOfferMarkersData(nearbyOffers);

  const markers = nearbyOffersMarkers.concat(offerMarker);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
  }, [dispatch, offerId]);

  return(
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        {isOfferDataLoading ? (
          <Spinner />
        ) : (
          offer && (
            <>
              <Offer data={offer} isDataLoading={isOfferDataLoading} />
              <Reviews
                additionalClassName='offer__reviews'
                data={comments}
                sortingType={CommentsSortingType.DateDecrease}
                maxCount={REVIEWS_MAX_COUNT}
              />
              <Map
                additionalClassName='offer__map'
                location={offer.city.location}
                markers={markers}
                activePlaceId={offerId}
              />
              <Offers
                title='Other places in the neighbourhood'
                offers={nearbyOffers}
              />
            </>
          )
        )};
      </main>
    </div>
  );
}

export default OfferPage;
