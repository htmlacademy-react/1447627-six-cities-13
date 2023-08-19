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
  loadAllOffersData,
  setAllOffersDataLoadingStatus,
  loadNearbyOffersData,
  loadOfferData,
  loadOfferCommentsData,
  setOfferDataLoadingStatus,
  requireAuthorization,
  redirectToRoute
} from './action';
import {AppRoute, APIRoute, AuthorizationStatus} from '../const';
import {saveToken, dropToken} from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAllOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setAllOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferPreviewsData>(APIRoute.Offers);
    dispatch(setAllOffersDataLoadingStatus(false));
    dispatch(loadAllOffersData(data));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreviewsData>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearbyOffersData(data));
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferComments',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewsData>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadOfferCommentsData(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));
    const {data} = await api.get<OfferFullData>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadOfferData(data));
  },
);

export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthorization',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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
