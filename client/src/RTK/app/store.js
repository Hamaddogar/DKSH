import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from '../Reducers/Reducers'
import { persistReducer, persistStore } from 'redux-persist';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist-indexeddb-storage';

const persistConfig = {
  key: 'dksh',
  storage: storage('myDB'),
  // stateReconciler: autoMergeLevel2,
  stateReconciler: autoMergeLevel1,
  blacklist: [
    "allDevelopers",
    "loading",
  ],
  rootReducer: mainReducer
}

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: { mainReducer: persistedReducer },
});


export const persistor = persistStore(store);