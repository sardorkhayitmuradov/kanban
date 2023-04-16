import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { tasksReducer } from './reducers/taskReducer';
import rootSaga from './sagas/rootSagas';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;