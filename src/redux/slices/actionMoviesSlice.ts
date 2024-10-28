import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PAGINATION_INITIAL_LIST_RES} from '../../utilities/constants';
import apiCall, {ApiDataType} from '../services/apiCall';
import {DISCOVER_MOVIE, POPULAR_MOVIE} from '../services/apiTypes';

const initialState = {
  actionMoviesLoading: false,
  actionMovies: PAGINATION_INITIAL_LIST_RES,
  actionMoviesError: null,
} as any;

export const fetchActionMovies = createAsyncThunk(
  'actionMovies',
  async (_payload, {fulfillWithValue, rejectWithValue}) => {
    const apiData: ApiDataType = {
      url:
        DISCOVER_MOVIE +
        '?with_genres=28&language=en-US&page=1&api_key=' +
        process.env.API_KEY,

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

const actionMoviesSlice = createSlice({
  name: 'actionMoviesSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchActionMovies.pending, state => {
        state.actionMoviesLoading = true;
      })
      .addCase(fetchActionMovies.fulfilled, (state, action) => {
        state.actionMoviesLoading = false;
        state.actionMovies = action.payload;
      })
      .addCase(fetchActionMovies.rejected, (state, action) => {
        state.actionMoviesLoading = false;
        state.actionMoviesError = action.payload;
      });
  },
});

export const {} = actionMoviesSlice?.actions;

export default actionMoviesSlice.reducer;
