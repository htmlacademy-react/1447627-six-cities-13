import {useEffect} from 'react';
import {OfferPreviewsData} from '../../types';
import useAppDispatch from '../use-app-dispatch';
import useAppSelector from '../use-app-selector';
import {fetchNearbyOffersAction} from '../../store/api-actions';
import {getRandomUniqueArrayItems} from '../../util';

function useNearbyOffers(offerId: string, count: number): OfferPreviewsData {
  const dispatch = useAppDispatch();
  const allNearbyOffers = useAppSelector((state) => state.nearbyOffers);

  useEffect(() => {
    dispatch(fetchNearbyOffersAction(offerId));
  }, [dispatch, offerId]);

  if (allNearbyOffers.length && count) {
    return getRandomUniqueArrayItems(allNearbyOffers, Math.min(allNearbyOffers.length - 1, count));
  } else {
    return allNearbyOffers;
  }
}

export default useNearbyOffers;
