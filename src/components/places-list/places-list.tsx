import React from 'react';
import PlaceCard from '../place-card';
import styles from './places-list.module.css';
import {Place} from '../../types';

type PlacesListProps = {
  additionalClassName?: string;
  grid?: 'multicolumn';
  cardGrid?: 'horizontal';
  places: Place[];
  onPlaceCardMouseEnter?: (id: string) => void;
  onPlaceCardMouseLeave?: () => void;
}

function PlacesList({
  additionalClassName,
  grid,
  cardGrid,
  places,
  onPlaceCardMouseEnter,
  onPlaceCardMouseLeave
}: PlacesListProps): React.JSX.Element {
  return (
    <div className={`
      ${styles.placesList}
      ${grid ? `${styles[`placesList--${grid}`]}` : ''}
      ${additionalClassName || ''}
    `}
    >
      {places?.length ? (
        <>
          {places.map((place) => (
            <PlaceCard
              data={place}
              key={place.id}
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

export default PlacesList;
