import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../Features/auth/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
      //...
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['/auth/register/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})