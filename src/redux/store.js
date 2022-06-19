import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./auth/auth-slice";
import testReducer from "./test/test-reducer";
import resultsReducer from "./results/results-slice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whiteList: ["accessToken", "isLogin"],
};
const persistedReducer = persistReducer(persistConfig, userReducer);

const persistTestConfig = {
  key: "test",
  storage,
};

const persistedTestReducer = persistReducer(persistTestConfig, testReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    test: persistedTestReducer,
    results: resultsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
