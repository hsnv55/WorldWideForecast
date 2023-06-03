import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  weter: any[];
}

const initialState: CounterState = {
  weter: [],
};

export const HistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryWeter: (state, action: PayloadAction<any>) => {
      state.weter = [...state.weter, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addHistoryWeter} = HistorySlice.actions;

export default HistorySlice.reducer;
