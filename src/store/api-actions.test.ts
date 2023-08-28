import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {
  AppThunkDispatch,
  extractActionsTypes,
  makeFakeOfferPreviewData,
  makeFakeOfferReviewData,
  makeFakeOfferFullData,
} from '../utils/mocks';
import {State, AuthData} from '../types';
import {
  checkAuthorizationAction,
  loginAction,
  logoutAction,
  fetchAllOffersAction,
  fetchNearbyOffersAction,
  fetchFavoriteOffersAction,
  fetchOfferCommentsAction,
  fetchOfferAction,
  addOfferToFavorites,
  removeOfferFromFavorites,
  sendOfferComment,
} from './api-actions';
import {APIRoute} from '../const';
import {redirectToRoute} from './action';
import * as tokenStorage from '../services/token';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({CATALOG: { offers: [] }});
  });

  describe('checkAuthorizationAction', () => {
    it('should dispatch "checkAuthorizationAction.pending" and "checkAuthorizationAction.fulfilled" with thunk "checkAuthorizationAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthorizationAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthorizationAction.pending.type,
        checkAuthorizationAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthorizationAction.pending" and "checkAuthorizationAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthorizationAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthorizationAction.pending.type,
        checkAuthorizationAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = {email: 'Oliver.conner@gmail.com', password: 'password1'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = {email: 'Oliver.conner@gmail.com', password: 'password1'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchAllOffersAction', () => {
    it('should dispatch "fetchAllOffersAction.pending", "fetchAllOffersAction.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOfferPreviewData()];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchAllOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAllOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAllOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAllOffersAction.pending.type,
        fetchAllOffersAction.fulfilled.type,
      ]);

      expect(fetchAllOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('should dispatch "fetchAllOffersAction.pending", "fetchAllOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchAllOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchAllOffersAction.pending.type,
        fetchAllOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearbyOffersAction', () => {
    it('should dispatch "fetchNearbyOffersAction.pending", "fetchNearbyOffersAction.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOfferPreviewData()];
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/offerId/nearby`).reply(200, mockOffers);

      await store.dispatch(fetchNearbyOffersAction('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAllOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearbyOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.fulfilled.type,
      ]);

      expect(fetchAllOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('should dispatch "fetchNearbyOffersAction.pending", "fetchNearbyOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/offerId/nearby`).reply(400, []);

      await store.dispatch(fetchNearbyOffersAction('offerId'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffersAction', () => {
    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOfferPreviewData()];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockOffers);

      await store.dispatch(fetchFavoriteOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoriteOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.rejected.type,
      ]);
    });
  });

  describe('addOfferToFavorites', () => {
    it('should dispatch "addOfferToFavorites.pending", "addOfferToFavorites.fulfilled" when server response 201', async() => {
      const mockOffer = makeFakeOfferPreviewData();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/offerId/1`).reply(201, mockOffer);

      await store.dispatch(addOfferToFavorites('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const addOfferToFavoritesFulfilled = emittedActions.at(1) as ReturnType<typeof addOfferToFavorites.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        addOfferToFavorites.pending.type,
        addOfferToFavorites.fulfilled.type,
      ]);

      expect(addOfferToFavoritesFulfilled.payload).toEqual(mockOffer);
    });

    it('should dispatch "addOfferToFavorites.pending", "addOfferToFavorites.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/offerId/1`).reply(400);

      await store.dispatch(addOfferToFavorites('offerId'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addOfferToFavorites.pending.type,
        addOfferToFavorites.rejected.type,
      ]);
    });
  });

  describe('removeOfferFromFavorites', () => {
    it('should dispatch "removeOfferFromFavorites.pending", "removeOfferFromFavorites.fulfilled" when server response 201', async() => {
      const mockOffer = makeFakeOfferPreviewData();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/offerId/0`).reply(200, mockOffer);

      await store.dispatch(removeOfferFromFavorites('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const removeOfferFromFavoritesFulfilled = emittedActions.at(1) as ReturnType<typeof removeOfferFromFavorites.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        removeOfferFromFavorites.pending.type,
        removeOfferFromFavorites.fulfilled.type,
      ]);

      expect(removeOfferFromFavoritesFulfilled.payload).toEqual(mockOffer);
    });

    it('should dispatch "removeOfferFromFavorites.pending", "removeOfferFromFavorites.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/offerId/0`).reply(400);

      await store.dispatch(removeOfferFromFavorites('offerId'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        removeOfferFromFavorites.pending.type,
        removeOfferFromFavorites.rejected.type,
      ]);
    });
  });

  describe('fetchOfferCommentsAction', () => {
    it('should dispatch "fetchOfferCommentsAction.pending", "fetchOfferCommentsAction.fulfilled", when server response 200', async() => {
      const mockComments = [makeFakeOfferReviewData()];
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/offerId`).reply(200, mockComments);

      await store.dispatch(fetchOfferCommentsAction('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferCommentsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferCommentsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferCommentsAction.pending.type,
        fetchOfferCommentsAction.fulfilled.type,
      ]);

      expect(fetchOfferCommentsActionFulfilled.payload).toEqual(mockComments);
    });

    it('should dispatch "fetchOfferCommentsAction.pending", "fetchOfferCommentsAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/offerId`).reply(400, []);

      await store.dispatch(fetchOfferCommentsAction('offerId'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferCommentsAction.pending.type,
        fetchOfferCommentsAction.rejected.type,
      ]);
    });
  });

  describe('sendOfferComment', () => {
    it('should dispatch "sendOfferComment.pending", "sendOfferComment.fulfilled", when server response 201', async() => {
      const mockComment = makeFakeOfferReviewData();
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/offerId`).reply(201, mockComment);

      await store.dispatch(sendOfferComment({
        reviewContent: {
          comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
          rating: 4
        },
        offerId: 'offerId'
      }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const sendOfferCommentFulfilled = emittedActions.at(1) as ReturnType<typeof sendOfferComment.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        sendOfferComment.pending.type,
        sendOfferComment.fulfilled.type,
      ]);

      expect(sendOfferCommentFulfilled.payload).toEqual(mockComment);
    });

    it('should dispatch "sendOfferComment.pending", "sendOfferComment.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/offerId`).reply(400);

      await store.dispatch(sendOfferComment({
        reviewContent: {
          comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
          rating: 4
        },
        offerId: 'offerId'
      }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        sendOfferComment.pending.type,
        sendOfferComment.rejected.type,
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled", when server response 200', async() => {
      const mockOffer = makeFakeOfferFullData();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/offerId`).reply(200, mockOffer);

      await store.dispatch(fetchOfferAction('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);
    });

    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/offerId`).reply(400, []);

      await store.dispatch(fetchOfferAction('offerId'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });
});
