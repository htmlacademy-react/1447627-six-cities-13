import React from 'react';
import {useState, useEffect, useRef, FormEvent} from 'react';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {sendOfferComment} from '../../store/api-actions';
import {getOffer} from '../../store/offer/offer.selectors';
import Textarea from '../textarea';
import StarRating from '../star-rating';
import {
  getOfferCommentLoadingStatus,
  getOfferCommentSendingStatus,
} from '../../store/offer-comment/offer-comment.selectors';
import {resetSendedStatus} from '../../store/offer-comment/offer-comment.slice';
import {CommentLength} from './const';

function ReviewForm(): React.JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  const formRef = useRef(null);

  const offerId = useAppSelector(getOffer)?.id;
  const dispatch = useAppDispatch();

  const isCommentLoading = useAppSelector(getOfferCommentLoadingStatus);
  const isSended = useAppSelector(getOfferCommentSendingStatus);

  useEffect(() => {
    if (isSended && formRef) {
      setFormData({...formData, rating: 0, comment: ''});
      dispatch(resetSendedStatus());
    }
  }, [dispatch, isSended, formData]);

  const checkFormValidity = () =>
    !!formData.rating &&
    !!(formData.comment.length >= CommentLength.Min && formData.comment.length <= CommentLength.Max);

  const isValid = checkFormValidity();

  const handleFieldChange = ({target}: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]: name === 'rating' ? +value : value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!offerId) {
      return;
    }

    dispatch(sendOfferComment({reviewContent: formData, offerId: offerId}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" ref={formRef} onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="comment">
        Your review
      </label>
      <StarRating value={formData.rating} onChange={handleFieldChange} disabled={isCommentLoading}/>
      <Textarea value={formData.comment} onChange={handleFieldChange} disabled={isCommentLoading} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{CommentLength.Min} characters</b>
          {formData.comment.length > CommentLength.Max && (
            <span>, but no more than <b className="reviews__text-amount">{CommentLength.Max}</b></span>
          )}.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isCommentLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
