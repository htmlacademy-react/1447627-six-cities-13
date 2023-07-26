import React from 'react';
import styles from './favorites-section.module.css';
import PlacesList from '../places-list';
import { Place } from '../../types';

type FavoritesSectionProps = {
  places?: Place[];
}

function FavoritesSection({places}: FavoritesSectionProps): React.JSX.Element {
  if (places?.length) {
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

  return <h1 className={styles.title}>Ничего нет</h1>;
}


export default FavoritesSection;
