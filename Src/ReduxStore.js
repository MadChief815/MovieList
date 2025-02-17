import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortlistReducer from './shortlistSlice';

const persistConfig = {
  key: 'shortlist',
  storage: AsyncStorage,
  whitelist: ['shortlist'],
};

const persistedReducer = persistReducer(persistConfig, shortlistReducer);

export const store = configureStore({
  reducer: {
    shortlist: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);
