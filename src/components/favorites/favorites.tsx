import React from 'react';
import styles from './favorites.module.css';
import OffersList from '../offers-list';
import {OfferPreviewsData} from '../../types';

type FavoritesSectionProps = {
  offers?: OfferPreviewsData;
}

function EmptyFavoritesSection(): React.JSX.Element {
  return (
    <section className={`${styles.favorites} favorites--empty`}>
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>
  );
}

function FavoritesSection({offers}: FavoritesSectionProps): React.JSX.Element {
  if (!offers || offers.length === 0) {
    return <EmptyFavoritesSection />;
  }

  const offersByCity: {
    [city: string]: OfferPreviewsData;
  } = {};

  offers.forEach((offer) => {
    if (offer.city.name in offersByCity) {
      offersByCity[offer.city.name].push(offer);
    } else {
      offersByCity[offer.city.name] = [offer];
    }
  });

  return (
    <section className={styles.favorites}>
      <h1 className={styles.title}>Saved listing</h1>
      <ul className={styles.list}>
        {Object.keys(offersByCity).map((city) => (
          <li className={styles.locationsItems} key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <OffersList additionalClassName="favorites__places" data={offersByCity[city]} cardGrid="horizontal" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoritesSection;
