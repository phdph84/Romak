import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/User.Sagas';
export default function* rootSaga() {
  yield all([call(userSagas)]);
}
