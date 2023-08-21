import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  AppDispatch,
  State,
  OfferPreviewsData,
  ReviewsData,
  OfferFullData,
  AuthData,
  UserData,
  ReviewData,
  ReviewContent
} from '../types';
import {
  redirectToRoute
} from './action';
import {AppRoute, APIRoute} from '../const';
import {saveToken, dropToken} from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<OfferPreviewsData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAllOffers',
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
  'data/fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreviewsData>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<ReviewsData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferComments',
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
  'data/fetchOffer',
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

export const sendComment = createAsyncThunk<
  void, {
    reviewContent: ReviewContent; offerId: string;
  }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({reviewContent, offerId}, {dispatch, extra: api}) => {
    await api.post<ReviewData>(`${APIRoute.Comments}/${offerId}`, reviewContent);
    dispatch(fetchOfferCommentsAction(offerId));
  },
);
