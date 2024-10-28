import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PAGINATION_INITIAL_LIST_RES} from '../../utilities/constants';
import apiCall, {ApiDataType} from '../services/apiCall';
import {POPULAR_MOVIE} from '../services/apiTypes';

const initialState = {
  popularMoviesLoading: false,
  popularMovies: PAGINATION_INITIAL_LIST_RES,
  popularMoviesError: null,
} as any;

export const fetchPopularMovies = createAsyncThunk(
  'popularMovies',
  async (_payload, {fulfillWithValue, rejectWithValue}) => {
    const apiData: ApiDataType = {
      url:
        POPULAR_MOVIE + '?language=en-US&page=1&api_key=' + process.env.API_KEY,
      method: 'GET',
    };
    try {
      const response = await apiCall(apiData);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const popularMoviesSlice = createSlice({
  name: 'popularMoviesSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovies.pending, state => {
        state.popularMoviesLoading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMoviesLoading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.popularMoviesLoading = false;
        state.popularMoviesError = action.payload;
      });
  },
});

export const {} = popularMoviesSlice?.actions;

export default popularMoviesSlice.reducer;
