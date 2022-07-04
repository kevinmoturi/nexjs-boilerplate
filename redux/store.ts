import { combineReducers, configureStore, Action, Store } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import breeds from './breeds/breedSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const combinedReducer = combineReducers({
  breeds,
});

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
};

const persistedReducer = persistReducer(persistConfig, reducer)

export const store: any = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware:  any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const makeStore: any = () => store;
export let persistor = persistStore(store)

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper(makeStore, { debug: false });