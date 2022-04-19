import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type CenterType = 'item'|'artBoard'|'none';

export type TargetRange = 'global'|'views'|'documents';

export interface TargetType {
  value: {
    center: CenterType,
    range: TargetRange
  }
};

const initialState:TargetType = {
  value: {
    center: 'none',
    range: 'views'
  }
};

const targetSlice = createSlice({
  name: 'targetItem',
  initialState,
  reducers: {
    setCenter: (state, action:PayloadAction<CenterType>) => {
      state.value.center = action.payload;
    },
    setRange: (state, action:PayloadAction<TargetRange>) => {
      state.value.range = action.payload;
    }
  }
});

export const { setCenter, setRange } = targetSlice.actions;

export const targetItem = (state:RootState) => state.targetItem;

export default targetSlice.reducer;
