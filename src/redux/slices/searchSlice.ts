import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PAGINATION_INITIAL_LIST_RES} from '../../utilities/constants';
import apiCall, {ApiDataType} from '../services/apiCall';
import {SEARCH_MOVIE, SEARCH_TV} from '../services/apiTypes';

const initialState = {
  searchLoading: false,
  search: PAGINATION_INITIAL_LIST_RES,
  searchError: null,
} as any;

export const searchMovie = createAsyncThunk(
  'search/searchMovie',
  async (payload: string, {fulfillWithValue, rejectWithValue}) => {
    const apiData: ApiDataType = {
      url:
        SEARCH_MOVIE + '?api_key=' + process.env.API_KEY + '&query=' + payload,
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
export const searchTvShow = createAsyncThunk(
  'search/searchTvShow',
  async (payload: string, {fulfillWithValue, rejectWithValue}) => {
    const apiData: ApiDataType = {
      url: SEARCH_TV + '?api_key=' + process.env.API_KEY + '&query=' + payload,
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

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchMovie.pending, state => {
        state.searchLoading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.search = action.payload;
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.payload;
      })

      .addCase(searchTvShow.pending, state => {
        state.searchLoading = true;
      })
      .addCase(searchTvShow.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.search = action.payload;
      })
      .addCase(searchTvShow.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.payload;
      });
  },
});

export const {} = searchSlice?.actions;

export default searchSlice.reducer;
