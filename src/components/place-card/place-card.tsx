import React from 'react';
import BookmarkButton from '../bookmark-button';
import Rating from '../rating';
import styles from './place-card.module.css';

type PlaceCardData = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type PlaceCardProps = {
  additionalClassName?: string;
  grid?: 'horizontal';
  data: PlaceCardData;
}

function PlaceCard({additionalClassName, grid, data}: PlaceCardProps): React.JSX.Element {
  const gridClassName = grid ? ` ${styles[`card--${grid}`]}` : '';
  const {title, type, price, previewImage, isFavorite, isPremium, rating} = data;

  return (
    <article className={`${styles.card}${gridClassName} ${additionalClassName || ''}`.trim()}>
      {isPremium ? (
        <div className={styles.mark}>
          <span>Premium</span>
        </div>
      ) : null}
      <div className={styles.imageWrapper}>
        <a href="#">
          <img
            className={styles.image}
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
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
          <a href="#">{title}</a>
        </h2>
        <p className={styles.type}>{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
