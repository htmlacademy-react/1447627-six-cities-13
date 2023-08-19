import React from 'react';
import OfferPreview from '../offer-preview';
import styles from './offers-list.module.css';
import {OfferPreviewsData} from '../../types';

type OffersListProps = {
  additionalClassName?: string;
  grid?: 'multicolumn';
  cardGrid?: 'horizontal';
  data: OfferPreviewsData;
  onPlaceCardMouseEnter?: (id: string) => void;
  onPlaceCardMouseLeave?: () => void;
}

function OffersList({
  additionalClassName,
  grid,
  cardGrid,
  data,
  onPlaceCardMouseEnter,
  onPlaceCardMouseLeave
}: OffersListProps): React.JSX.Element {
  return (
    <div className={`
      ${styles.offersList}
      ${grid ? `${styles[`offersList--${grid}`]}` : ''}
      ${additionalClassName || ''}
    `}
    >
      {data?.length ? (
        <>
          {data.map((offer) => (
            <OfferPreview
              data={offer}
              key={offer.id}
              grid={cardGrid}
              onPlaceCardMouseEnter={onPlaceCardMouseEnter}
              onPlaceCardMouseLeave={onPlaceCardMouseLeave}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default OffersList;
