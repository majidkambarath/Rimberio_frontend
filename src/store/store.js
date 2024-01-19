import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import categorySlice from "./slice/categorySlice";
import priceSlice from "./slice/priceSlice";
import cartSlice from "./slice/cartSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  price:priceSlice,
  categories:categorySlice,
  cart:cartSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;