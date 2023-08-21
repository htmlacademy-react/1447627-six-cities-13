import React from 'react';
import {StarTitle, StarValue} from './const';

type StarRatingProps = {
  value: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function StarRating({value, onChange}: StarRatingProps): React.JSX.Element {
  return(
    <div className="reviews__rating-form form__rating">
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={StarValue.Perfect}
        id={`${StarValue.Perfect}-stars`}
        type="radio"
        checked={value === StarValue.Perfect}
        onChange={onChange}
      />
      <label
        htmlFor={`${StarValue.Perfect}-stars`}
        className="reviews__rating-label form__rating-label"
        title={StarTitle.Perfect}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={StarValue.Good}
        id={`${StarValue.Good}-stars`}
        type="radio"
        checked={value === StarValue.Good}
        onChange={(onChange)}
      />
      <label
        htmlFor={`${StarValue.Good}-stars`}
        className="reviews__rating-label form__rating-label"
        title={StarTitle.Good}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={StarValue.NotBad}
        id={`${StarValue.NotBad}-stars`}
        type="radio"
        checked={value === StarValue.NotBad}
        onChange={onChange}
      />
      <label
        htmlFor={`${StarValue.NotBad}-stars`}
        className="reviews__rating-label form__rating-label"
        title={StarTitle.NotBad}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={StarValue.Badly}
        id={`${StarValue.Badly}-stars`}
        type="radio"
        checked={value === StarValue.Badly}
        onChange={onChange}
      />
      <label
        htmlFor={`${StarValue.Badly}-stars`}
        className="reviews__rating-label form__rating-label"
        title={StarTitle.Badly}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={StarValue.Terribly}
        id={`${StarValue.Terribly}-star`}
        type="radio"
        checked={value === StarValue.Terribly}
        onChange={onChange}
      />
      <label
        htmlFor={`${StarValue.Terribly}-star`}
        className="reviews__rating-label form__rating-label"
        title={StarTitle.Terribly}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </div>
  );
}

export default StarRating;
