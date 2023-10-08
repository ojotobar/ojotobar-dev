import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/';
import { persistReducer, PERSIST } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApi } from '../features/api/userApi';
import { educationApi } from '../features/api/educationApi'
import authReducer from '../features/auth/authSlice';
import { experienceApi } from '../features/api/experienceApi';
import { mediaLinkApi } from '../features/api/mediaLinkApi';
import { projectApi } from '../features/api/projectApi';
import { skillApi } from '../features/api/skillApi'

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [educationApi.reducerPath]: educationApi.reducer,
  [experienceApi.reducerPath]: experienceApi.reducer,
  [mediaLinkApi.reducerPath]: mediaLinkApi.reducer,
  [projectApi.reducerPath]: projectApi.reducer,
  [skillApi.reducerPath]: skillApi.reducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(
        userApi.middleware, educationApi.middleware, experienceApi.middleware,
        mediaLinkApi.middleware, projectApi.middleware, skillApi.middleware
      )
});

setupListeners(store.dispatch);

