import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employees';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, employeesReducer);

const store = configureStore({
  reducer: {
    employees: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
