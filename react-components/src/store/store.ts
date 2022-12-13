import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'store/index';

function getState() {
  let state = {} as RootState;

  if (localStorage.getItem('app')) {
    const app: string = localStorage.getItem('app') || '';
    state = JSON.parse(app);

    state.toursReducer.needToLoad = false;
    state.detailsReducer.needToLoad = false;
  }

  return state;
}

export const configureAppStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState: getState(),
  });

export const store = configureAppStore();

store.subscribe(() => {
  localStorage.setItem('app', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
