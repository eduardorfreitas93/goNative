import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteError } from '../actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    yield put(addFavoriteSuccess(response));
  } catch (err) {
    yield put(addFavoriteError('Repo não existe'));
  }
}
