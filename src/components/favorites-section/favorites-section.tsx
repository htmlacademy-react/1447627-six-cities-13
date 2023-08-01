import React from 'react';
import styles from './favorites-section.module.css';
import PlacesList from '../places-list';
import {Place} from '../../types';

type FavoritesSectionProps = {
  places?: Place[];
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

function FavoritesSection({places}: FavoritesSectionProps): React.JSX.Element {
  if (!places || places.length === 0) {
    return <EmptyFavoritesSection />;
  }

  const placesByCity: {
    [city: string]: Place[];
  } = {};

  places.forEach((place) => {
    if (place.city.name in placesByCity) {
      placesByCity[place.city.name].push(place);
    } else {
      placesByCity[place.city.name] = [place];
    }
  });

  return (
    <section className={styles.favorites}>
      <h1 className={styles.title}>Saved listing</h1>
      <ul className={styles.list}>
        {Object.keys(placesByCity).map((city) => (
          <li className={styles.locationsItems} key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <PlacesList additionalClassName="favorites__places" places={placesByCity[city]} cardGrid="horizontal" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoritesSection;
