import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  AppDispatch,
  State,
  OfferPreviewData,
  OfferPreviewsData,
  ReviewsData,
  OfferFullData,
  AuthData,
  UserData,
  ReviewData,
  ReviewContent,
} from '../types';
import {
  redirectToRoute
} from './action';
import {AppRoute, APIRoute, FavoriteActionCode} from '../const';
import {saveToken, dropToken} from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<OfferPreviewsData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'catalog/fetch',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewsData>(APIRoute.Offers);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<OfferPreviewsData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'nearbyOffers/fetch',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreviewsData>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<OfferPreviewsData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetch',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewsData>(APIRoute.Favorite);
    return data;
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<ReviewsData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/fetch',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewsData>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<OfferFullData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetch',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferFullData>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthorization',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const addOfferToFavorites = createAsyncThunk<OfferPreviewData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/add',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<OfferPreviewData>(`${APIRoute.Favorite}/${offerId}/${FavoriteActionCode.Add}`);
    return data;
  },
);

export const removeOfferFromFavorites = createAsyncThunk<OfferPreviewData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/remove',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<OfferPreviewData>(`${APIRoute.Favorite}/${offerId}/${FavoriteActionCode.Remove}`);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const sendOfferComment = createAsyncThunk<
  ReviewData, {
    reviewContent: ReviewContent; offerId: string;
  }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/send',
  async ({reviewContent, offerId}, {extra: api}) => {
    const {data} = await api.post<ReviewData>(`${APIRoute.Comments}/${offerId}`, reviewContent);
    return data;
  },
);

