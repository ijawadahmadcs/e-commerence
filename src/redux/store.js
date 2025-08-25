// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

// create the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

// export as default
export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { persistStore, persistReducer } from "redux-persist";
// import { combineReducers } from "redux";
// import cartReducer from "./slices/cartSlice";
// import authReducer from "./slices/authSlice";

// // persist config
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // combine reducers
// const rootReducer = combineReducers({
//   cart: cartReducer,
//   auth: authReducer,
// });

// // wrap root reducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // create store
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // required for redux-persist
//     }),
// });

// // create persistor
// export const persistor = persistStore(store);

// export default store;
