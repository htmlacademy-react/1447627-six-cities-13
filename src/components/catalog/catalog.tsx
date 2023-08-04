import React, {useState} from 'react';
import Map from '../map';
import PlacesList from '../places-list';
import {Place} from '../../types';
import useAppSelector from '../../hooks/use-app-selector';
import cn from 'classnames';

type CatalogProps = {
  places: Place[];
}

function Catalog({places}: CatalogProps): React.JSX.Element {
  const [activePlaceId, setActivePlaceId] = useState('');
  const currentCity = useAppSelector((state) => state.filter.city);

  const handlePlaceCardMouseEnter = (id: string): void => {
    setActivePlaceId(id);
  };

  const handlePlaceCardMouseLeave = (): void => {
    setActivePlaceId('');
  };

  const placesByCurrentCity = places.filter((place) => place.city.name === currentCity);

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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>{' '}
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <PlacesList
              additionalClassName="cities__places-list tabs__content"
              places={placesByCurrentCity}
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
