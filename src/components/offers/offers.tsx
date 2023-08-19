import React from 'react';
import OffersList from '../offers-list';
import {OfferPreviewsData} from '../../types';

type OffersListProps = {
  title: string;
  offers: OfferPreviewsData;
}

function Offers({title, offers}: OffersListProps): React.JSX.Element {
  return(
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">{title}</h2>
        <OffersList additionalClassName="near-places__list tabs__content" data={offers} grid="multicolumn" />
      </section>
    </div>
  );
}

export default Offers;
