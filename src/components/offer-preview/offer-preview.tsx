import React from 'react';
import {Link} from 'react-router-dom';
import BookmarkButton from '../bookmark-button';
import Rating from '../rating';
import styles from './offer-preview.module.css';
import {OfferPreviewData} from '../../types';

type OfferPreviewProps = {
  additionalClassName?: string;
  grid?: 'horizontal';
  data: OfferPreviewData;
  onPlaceCardMouseEnter?: (id: string) => void;
  onPlaceCardMouseLeave?: () => void;
}

function OfferPreview({
  additionalClassName,
  grid,
  data,
  onPlaceCardMouseEnter,
  onPlaceCardMouseLeave
}:OfferPreviewProps): React.JSX.Element {
  const {id, title, type, price, previewImage, isFavorite, isPremium, rating} = data;

  let handlePlaceCardMouseEnter;
  let handlePlaceCardMouseLeave;

  if (onPlaceCardMouseEnter) {
    handlePlaceCardMouseEnter = () => {
      onPlaceCardMouseEnter(id);
    };
  }

  if (onPlaceCardMouseLeave) {
    handlePlaceCardMouseLeave = () => {
      onPlaceCardMouseLeave();
    };
  }

  return (
    <article className={`
      ${styles.card}
      ${grid ? `${styles[`card--${grid}`]}` : ''}
      ${additionalClassName || ''}
    `}
    onMouseEnter={handlePlaceCardMouseEnter}
    onMouseLeave={handlePlaceCardMouseLeave}
    >
      {isPremium ? (
        <div className={styles.mark}>
          <span>Premium</span>
        </div>
      ) : null}
      <div className={styles.imageWrapper}>
        <Link to={`/offer/${id}`}>
          <img
            className={styles.image}
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <b className={styles.priceValue}>€{price}</b>{' '}
            <span className={styles.priceText}>/&nbsp;night</span>
          </div>
          <BookmarkButton additionalClassName={styles.bookmarkButton} active={isFavorite}/>
        </div>
        <Rating additionalClassName={styles.rating} value={rating} size='small' />
        <h2 className={styles.name}>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className={styles.type}>{type}</p>
      </div>
    </article>
  );
}

export default OfferPreview;
