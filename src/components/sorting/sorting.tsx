import React, {useState} from 'react';
import cn from 'classnames';
import {OffersSortingType} from '../../const';

type SortingProps = {
  currentType: OffersSortingType;
  onChangeSortingType: (type: OffersSortingType) => void;
}

function Sorting({currentType, onChangeSortingType}: SortingProps): React.JSX.Element {
  const [optionsOpening, setOptionsOpening] = useState(false);

  const handleSortingTypeClick = (): void => {
    setOptionsOpening(true);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span className="places__sorting-type" onClick={handleSortingTypeClick} tabIndex={0}>
        {currentType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn(
          'places__options places__options--custom',
          {'places__options--opened': optionsOpening}
        )}
      >
        {Object.values(OffersSortingType).map((type) => (
          <li
            className={cn(
              'places__option',
              {'places__option--active': type === currentType}
            )}
            tabIndex={0}
            onClick={(): void => {
              onChangeSortingType(type);
              setOptionsOpening(false);
            }}
            key={type}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
