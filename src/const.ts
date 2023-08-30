export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  Root = '/',
  NotFound = '*'
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum OffersSortingType {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  RatingDecrease = 'Top rated first'
}

export enum CommentsSortingType {
  DateDecrease = 'new to old',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameSpace {
  Catalog = 'CATALOG',
  FavoriteOffers = 'FAVORITE_OFFERS',
  Filter = 'FILTER',
  NearbyOffers = 'NEARBY_OFFERS',
  Offer = 'OFFER',
  OfferComment = 'OFFER_COMMENT',
  OfferComments = 'OFFER_COMMENTS',
  User = 'USER',
}

export enum FavoriteActionCode {
  Add = 1,
  Remove = 0,
}

export const PAGE_RENDERING_TIMEOUT = 250;
