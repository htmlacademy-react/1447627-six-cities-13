import React from 'react';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {getFilterCity} from '../../store/filter/filter.selectors';
import {setFilterCity} from '../../store/filter/filter.slice';
import cn from 'classnames';

type FilterProps = {
  cities: string[];
}

function Filter({cities}: FilterProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getFilterCity);

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={cn(
                  'locations__item-link tabs__item',
                  {'tabs__item--active': city === currentCity}
                )}
                {...(city === currentCity ? {} : {href: '#'})}
                onClick={(): void => {
                  if (city !== currentCity) {
                    dispatch(setFilterCity(city));
                  }
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Filter;
