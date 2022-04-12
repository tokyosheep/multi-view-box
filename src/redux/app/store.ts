import { configureStore } from '@reduxjs/toolkit';
import zoomRatioSlice from '../features/zoomRatio/zoomRatioSlice';
import targetItemSlice from '../features/targetItem/targetItemSlice';

export const store = configureStore({
  reducer: {
    zoomRatio: zoomRatioSlice,
    targetItem: targetItemSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
