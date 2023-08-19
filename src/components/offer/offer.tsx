import React from 'react';
import BookmarkButton from '../../components/bookmark-button';
import Rating from '../../components/rating';
import {OfferFullData} from '../../types';
import Spinner from '../spinner';
import cn from 'classnames';

type OfferProps = {
  data: OfferFullData;
  isDataLoading?: boolean;
}

function Offer({data, isDataLoading}: OfferProps): React.JSX.Element {
  if (isDataLoading) {
    return <Spinner />;
  } else {
    return (
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {data.images.map((image) => (
              <div className="offer__image-wrapper" key={image}>
                <img
                  className="offer__image"
                  src={image}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {data.isPremium && <div className="offer__mark"><span>Premium</span></div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{data.title}</h1>
              <BookmarkButton
                additionalClassName="offer__bookmark-button"
                width={31}
                height={33}
                active={data.isFavorite}
              />
            </div>
            <Rating additionalClassName="offer__rating" value={data.rating} size="big" showLabel />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{data.type}</li>
              <li className="offer__feature offer__feature--bedrooms">{data.bedrooms} Bedrooms</li>
              <li className="offer__feature offer__feature--adults">Max {data.adults} adults</li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{data.price}</b>{' '}
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {data.goods.map((good) =>
                  <li className="offer__inside-item" key={good}>{good}</li>
                )}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div
                  className={cn(
                    'offer__avatar-wrapper user__avatar-wrapper',
                    {'offer__avatar-wrapper--pro': data.host.isPro}
                  )}
                >
                  <img
                    className="offer__avatar user__avatar"
                    src={data.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{data.host.name}</span>
                {data.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Offer;
