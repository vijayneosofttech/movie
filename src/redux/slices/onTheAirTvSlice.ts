import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PAGINATION_INITIAL_LIST_RES} from '../../utilities/constants';
import apiCall, {ApiDataType} from '../services/apiCall';
import {ON_THE_AIR_TV} from '../services/apiTypes';

const initialState = {
  onTheAirTvLoading: false,
  onTheAirTv: PAGINATION_INITIAL_LIST_RES,
  onTheAirTvError: null,
} as any;

export const fetchOnTheAirTv = createAsyncThunk(
  'onTheAirTv',
  async (_payload, {fulfillWithValue, rejectWithValue}) => {
    const apiData: ApiDataType = {
      url:
        ON_THE_AIR_TV + '?language=en-US&page=1&api_key=' + process.env.API_KEY,
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

const onTheAirTvSlice = createSlice({
  name: 'onTheAirTvSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOnTheAirTv.pending, state => {
        state.onTheAirTvLoading = true;
      })
      .addCase(fetchOnTheAirTv.fulfilled, (state, action) => {
        state.onTheAirTvLoading = false;
        state.onTheAirTv = action.payload;
      })
      .addCase(fetchOnTheAirTv.rejected, (state, action) => {
        state.onTheAirTvLoading = false;
        state.onTheAirTvError = action.payload;
      });
  },
});

export const {} = onTheAirTvSlice?.actions;

export default onTheAirTvSlice.reducer;
