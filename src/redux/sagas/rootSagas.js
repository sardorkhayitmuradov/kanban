import { all } from 'redux-saga/effects';
import taskSagas from './taskSagas';

export default function* rootSaga() {
  yield all([
    taskSagas(),
  ]);
}