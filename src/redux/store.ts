import { authSlice } from "./auth/auth.slice";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { testsSlice } from "./tests/tests.slice"; 


const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [testsSlice.name]: testsSlice.reducer,
});

const persistConfig = {
  key: 'BILINGUAL',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
