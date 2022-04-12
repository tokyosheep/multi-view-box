import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ZoomRatio {
  value: number
}

const initialState:ZoomRatio = {
  value: 0
}

const zoomRatioSlice = createSlice({
  name: 'zoomRatio',
  initialState,
  reducers: {
    setRaioValue: (state, action:PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { setRaioValue } = zoomRatioSlice.actions;

export const zoomRatio = (state:RootState) => state.zoomRatio;

export default zoomRatioSlice.reducer;
