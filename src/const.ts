export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  Root = '/',
  Page404 = '*'
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

export enum SortingType {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  RatingDecrease = 'Top rated first'
}

export enum APIRoute {
  Places = '/offers',
  Login = '/login',
  Logout = '/logout',
}
