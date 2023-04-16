import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
} from '../actions/actionTypes';

const API_URL = 'https://kanban-website.vercel.app/api/tasks'

function* fetchTasks() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_TASKS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* addTask(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: ADD_TASK_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* deleteTask(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: DELETE_TASK_SUCCESS, payload: action.payload });
  } catch (error) {
    console.error(error);
  }
}

function* watchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
  yield takeEvery(ADD_TASK_REQUEST, addTask);
  yield takeEvery(DELETE_TASK_REQUEST, deleteTask);
}

export default function* rootSaga() {
  yield watchTasks();
}