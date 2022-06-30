import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import breeds from './breeds/breedSlice'

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

export const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper(makeStore, { debug: false });