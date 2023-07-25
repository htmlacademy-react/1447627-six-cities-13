import React from 'react';
import {useState} from 'react';
import PlaceCard from '../place-card';
import styles from './places-list.module.css';

type Place = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type PlacesListProps = {
  additionalClassName?: string;
  grid?: 'multicolumn';
  cardGrid?: 'horizontal';
  places: Place[];
}

function PlacesList({additionalClassName, grid, cardGrid, places}: PlacesListProps): React.JSX.Element {
  const [activeCardId] = useState(null);

  return (
    <div className={`
      ${styles.placesList}
      ${grid ? `${styles[`placesList--${grid}`]}` : ''}
      ${additionalClassName || ''}
    `} data-active={activeCardId}
    >
      {places?.length ? (
        <>
          {places.map((place) => (
            <PlaceCard data={place} key={place.id} grid={cardGrid} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default PlacesList;
