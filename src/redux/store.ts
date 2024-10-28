import {configureStore} from '@reduxjs/toolkit';
import popularMoviesSlice from './slices/popularMoviesSlice';
import popularTvSlice from './slices/popularTvSlice';
import actionMoviesSlice from './slices/actionMoviesSlice';
import onTheAirTvSlice from './slices/onTheAirTvSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    popularTv: popularTvSlice,
    actionMovies: actionMoviesSlice,
    onTheAirTv: onTheAirTvSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
