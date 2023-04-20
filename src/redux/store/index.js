import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { encryptTransform } from "redux-persist-transform-encrypt";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userReducer from "../reducers/myProfileReducer";
import experienceReducer from "../reducers/experienceReducer";
import profilesReducer from "../reducers/profilesReducer";
import selectedProfileReducer from "../reducers/selectedProfileReducer";
import myProfileReducer from "../reducers/myProfileReducer";
import postsReducer from "../reducers/postsReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
      secretToken: process.env.REACT_APP_STRIVE_TOKEN,
    }),
  ],
};

const rootReducer = combineReducers({
  // user: userReducer, // forse questa proprietà dovrà cambiare il nome, renderla "parlante" => myProfile
  myProfile: myProfileReducer,
  selectedProfile: selectedProfileReducer,
  experience: experienceReducer,
  profiles: profilesReducer,
  posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
