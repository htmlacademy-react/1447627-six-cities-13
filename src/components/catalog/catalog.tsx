import React, {useState} from 'react';
import Map from '../map';
import PlacesList from '../places-list';
import Sorting from '../sorting';
import {Place} from '../../types';
import useAppSelector from '../../hooks/use-app-selector';
import cn from 'classnames';
import {SortingType} from '../../const';

type CatalogProps = {
  allPlaces: Place[];
}

function Catalog({allPlaces}: CatalogProps): React.JSX.Element {
  const [activePlaceId, setActivePlaceId] = useState('');
  const currentCity = useAppSelector((state) => state.filter.city);
  const [sortingType, setSortingType] = useState(SortingType.Popular);

  const handlePlaceCardMouseEnter = (id: string): void => {
    setActivePlaceId(id);
  };

  const handlePlaceCardMouseLeave = (): void => {
    setActivePlaceId('');
  };

  const changeSortingType = (type: SortingType): void => {
    setSortingType(type);
  };

  const sortPlaces = (places: Place[], type: SortingType) => {
    switch (type) {
      case SortingType.PriceDecrease:
        return places.sort((a, b) => b.price - a.price);
      case SortingType.PriceIncrease:
        return places.sort((a, b) => a.price - b.price);
      case SortingType.RatingDecrease:
        return places.sort((a, b) => b.rating - a.rating);
      case SortingType.Popular:
      default:
        return places;
    }
  };

  const placesByCurrentCity = allPlaces.filter((place) => place.city.name === currentCity);
  const sortedPlacesByCurrentCity = sortPlaces(placesByCurrentCity.slice(), sortingType);

  let currentCityLocation;

  if (placesByCurrentCity.length) {
    currentCityLocation = placesByCurrentCity[0]?.city.location;
  }

  return(
    <div className="cities">
      <div
        className={cn(
          'cities__places-container container',
          {'cities__places-container--empty': !placesByCurrentCity.length}
        )}
      >
        {placesByCurrentCity.length ? (
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesByCurrentCity.length} places to stay in {currentCity}</b>
            <Sorting currentType={sortingType} onChangeSortingType={changeSortingType} />
            <PlacesList
              additionalClassName="cities__places-list tabs__content"
              places={sortedPlacesByCurrentCity}
              grid="multicolumn"
              onPlaceCardMouseEnter={handlePlaceCardMouseEnter}
              onPlaceCardMouseLeave={handlePlaceCardMouseLeave}
            />
          </section>
        ) : (
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
            </div>
          </section>
        )}
        <div className="cities__right-section">
          {currentCityLocation && (
            <Map
              additionalClassName="cities__map"
              location={currentCityLocation}
              places={placesByCurrentCity}
              activePlaceId={activePlaceId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
