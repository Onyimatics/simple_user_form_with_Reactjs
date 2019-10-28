import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import rootReducer from './modules';
import { watchUserForm } from '../middleware/userSaga';

const sagaMiddleware = createSagaMiddleware();
// const loggerMiddleware = createLogger();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = storeEnhancers(applyMiddleware(sagaMiddleware));

// sagaMiddleware.push(loggerMiddleware);

const store = createStore(
  rootReducer,
  {
    userReducer: {
      formData: [],
      error: null,
      status: 'rest'
    }
  },
  middlewares
);

sagaMiddleware.run(watchUserForm);

export default store;
