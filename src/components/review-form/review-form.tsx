import React from 'react';
import {useState, FormEvent} from 'react';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {sendComment} from '../../store/api-actions';
import {getOffer} from '../../store/app-data/app-data.selectors';
import Textarea from '../textarea';
import StarRating from '../star-rating';

function ReviewForm(): React.JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  const offerId = useAppSelector(getOffer)?.id;
  const dispatch = useAppDispatch();

  const checkFormValidity = () => !!formData.rating && !!formData.comment;
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

    dispatch(sendComment({reviewContent: formData, offerId: offerId}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="comment">
        Your review
      </label>
      <StarRating value={formData.rating} onChange={handleFieldChange} />
      <Textarea value={formData.comment} onChange={handleFieldChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
