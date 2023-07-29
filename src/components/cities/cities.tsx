import React, {useState} from 'react';
import Map from '../../components/map';
import PlacesList from '../../components/places-list';
import {Settings} from '../../settings';
import {Place} from '../../types';

type CitiesProps = {
  offersCount?: number;
  places: Place[];
}

function Cities({offersCount = Settings.OffersCount, places}: CitiesProps): React.JSX.Element {
  const [activePlaceId, setActivePlaceId] = useState('');
  const CURRENT_CITY = 'Amsterdam';

  const handlePlaceCardMouseEnter = (id: string): void => {
    setActivePlaceId(id);
  };

  const handlePlaceCardMouseLeave = (): void => {
    setActivePlaceId('');
  };

  const placesByCurrentCity = places.filter((place) => place.city.name === CURRENT_CITY);
  const currentCityLocation = placesByCurrentCity[0]?.city.location;

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in Amsterdam</b>
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
        <div className="cities__right-section">
          <Map
            additionalClassName="cities__map"
            location={currentCityLocation}
            places={placesByCurrentCity}
            activePlaceId={activePlaceId}
          />
        </div>
      </div>
    </div>
  );
}

export default Cities;
