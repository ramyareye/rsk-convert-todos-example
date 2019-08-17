import {persistStore, persistReducer} from 'redux-persist'
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'key',
  storage,
  whitelist: ['todos'],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const defaultMiddlewareConfig = {
  ignoreSerializable: ['persist/PERSIST'],
};

const middleware = [
  ...getDefaultMiddleware(defaultMiddlewareConfig)
];

const store = configureStore({
  reducer: persistedReducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export {store, persistor};
