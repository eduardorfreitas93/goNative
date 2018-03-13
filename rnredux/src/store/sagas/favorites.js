import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.data.id === response.data.id)) {
      yield put(FavoriteActions.addFavoriteError('Repo dublicado'));
    } else {
      yield put(FavoriteActions.addFavoriteSuccess(response));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteError('Repo não existe'));
  }
}
