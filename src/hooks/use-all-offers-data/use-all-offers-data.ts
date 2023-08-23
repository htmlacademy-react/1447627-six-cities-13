import {useEffect} from 'react';
import {OfferPreviewsData} from '../../types';
import useAppDispatch from '../use-app-dispatch';
import useAppSelector from '../use-app-selector';
import {fetchAllOffersAction} from '../../store/api-actions';
import {getAllOffers} from '../../store/catalog/catalog.selectors';

function useAllOffersData(): OfferPreviewsData {
  const dispatch = useAppDispatch();
  const allOffers = useAppSelector(getAllOffers);

  useEffect(() => {
    dispatch(fetchAllOffersAction());
  }, [dispatch]);

  return allOffers;
}

export default useAllOffersData;
