import {useEffect} from 'react';
import {ReviewsData} from '../../types';
import useAppDispatch from '../use-app-dispatch';
import useAppSelector from '../use-app-selector';
import {fetchOfferCommentsAction} from '../../store/api-actions';

function useCommentsData(offerId: string): ReviewsData {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchOfferCommentsAction(offerId));
  }, [dispatch, offerId]);

  return comments;
}

export default useCommentsData;
