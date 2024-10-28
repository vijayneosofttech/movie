import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PAGINATION_INITIAL_LIST_RES} from '../../utilities/constants';
import apiCall, {ApiDataType} from '../services/apiCall';
import {POPULAR_TV} from '../services/apiTypes';

const initialState = {
  popularTvLoading: false,
  popularTv: PAGINATION_INITIAL_LIST_RES,
  popularTvError: null,
} as any;

export const fetchPopularTv = createAsyncThunk(
  'popularTv',
  async (_payload, {fulfillWithValue, rejectWithValue}) => {
    const apiData: ApiDataType = {
      url: POPULAR_TV + '?language=en-US&page=1&api_key=' + process.env.API_KEY,
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

const popularTvSlice = createSlice({
  name: 'popularTvSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularTv.pending, state => {
        state.popularTvLoading = true;
      })
      .addCase(fetchPopularTv.fulfilled, (state, action) => {
        state.popularTvLoading = false;
        state.popularTv = action.payload;
      })
      .addCase(fetchPopularTv.rejected, (state, action) => {
        state.popularTvLoading = false;
        state.popularTvError = action.payload;
      });
  },
});

export const {} = popularTvSlice?.actions;

export default popularTvSlice.reducer;
