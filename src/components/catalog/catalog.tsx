import React, {useState, useCallback} from 'react';
import Map from '../map';
import OffersList from '../offers-list';
import Sorting from '../sorting';
import {OfferPreviewsData} from '../../types';
import useAppSelector from '../../hooks/use-app-selector';
import cn from 'classnames';
import {OffersSortingType} from '../../const';
import {getOfferMarkersData} from '../../util';
import {getFilterCity} from '../../store/filter/filter.selectors';

type CatalogProps = {
  offers: OfferPreviewsData;
}

function Catalog({offers}: CatalogProps): React.JSX.Element {
  const [activePlaceId, setActivePlaceId] = useState('');
  const currentCity = useAppSelector(getFilterCity);
  const [sortingType, setSortingType] = useState(OffersSortingType.Popular);

  const handlePlaceCardMouseEnter = useCallback((id: string): void => {
    setActivePlaceId(id);
  }, []);

  const handlePlaceCardMouseLeave = useCallback((): void => {
    setActivePlaceId('');
  }, []);

  const changeSortingType = useCallback(
    (type: OffersSortingType): void => {
      setSortingType(type);
    },
    []
  );

  const sortOffers = (data: OfferPreviewsData, type: OffersSortingType) => {
    switch (type) {
      case OffersSortingType.PriceDecrease:
        return data.sort((a, b) => b.price - a.price);
      case OffersSortingType.PriceIncrease:
        return data.sort((a, b) => a.price - b.price);
      case OffersSortingType.RatingDecrease:
        return data.sort((a, b) => b.rating - a.rating);
      case OffersSortingType.Popular:
      default:
        return data;
    }
  };

  const offersByCurrentCity = offers.filter((place) => place.city.name === currentCity);
  const offerMarkersByCurrentCity = getOfferMarkersData(offersByCurrentCity);

  const sortedOffersByCurrentCity = sortOffers(offersByCurrentCity.slice(), sortingType);

  let currentCityLocation;

  if (offersByCurrentCity.length) {
    currentCityLocation = offersByCurrentCity[0]?.city.location;
  }

  return(
    <div className="cities">
      <div
        className={cn(
          'cities__places-container container',
          {'cities__places-container--empty': !offersByCurrentCity.length}
        )}
      >
        {offersByCurrentCity.length ? (
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersByCurrentCity.length} places to stay in {currentCity}</b>
            <Sorting currentType={sortingType} onChangeSortingType={changeSortingType} />
            <OffersList
              additionalClassName="cities__places-list tabs__content"
              data={sortedOffersByCurrentCity}
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
              markers={offerMarkersByCurrentCity}
              activePlaceId={activePlaceId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
