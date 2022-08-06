import { configureStore } from '@reduxjs/toolkit';
import { playersApi } from '../services/playersApi';

export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer,
    },
  });