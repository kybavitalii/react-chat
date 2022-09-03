import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from '../futures/chats/chatsSlice.js';

export const store = configureStore({
  reducer: {
    counter: chatsReducer,
  },
});
