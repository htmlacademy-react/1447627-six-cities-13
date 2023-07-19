import React from 'react';
import BookmarkButton from '../bookmark-button';
import Rating from '../rating';
import styles from './place-card.module.css';

type PlaceCardProps = {
  additionalClassName?: string;
  grid?: 'horizontal';
  isPremium?: boolean;
}

function PlaceCard({additionalClassName, grid, isPremium}: PlaceCardProps): React.JSX.Element {
  const gridClassName = grid ? ` ${styles[`card--${grid}`]}` : '';

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
            src="img/apartment-01.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <b className={styles.priceValue}>€120</b>{' '}
            <span className={styles.priceText}>/&nbsp;night</span>
          </div>
          <BookmarkButton additionalClassName={styles.bookmarkButton}/>
        </div>
        <Rating additionalClassName={styles.rating} value={4} size='small' />
        <h2 className={styles.name}>
          <a href="#">
            Beautiful &amp; luxurious apartment at great location
          </a>
        </h2>
        <p className={styles.type}>Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
