import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'app/index';

function getState() {
  let state = {};

  if (localStorage.getItem('app')) {
    const app: string = localStorage.getItem('app') || '';
    state = JSON.parse(app);
  }
  return state;
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: getState(),
});

store.subscribe(() => {
  localStorage.setItem('app', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
