// src/store/persistConfig.js

import storage from "redux-persist/lib/storage";
// import createBlacklistTransform from "./create-blacklist-transform";

// NOTE: Slices to exclude from the local-storage persist
// Use the 'blacklist' key to exclude entire slices from being persisted.
// Use the 'transforms' array to exclude specific fields within slices from being persisted.

// Example usage of createBlacklistTransform:
// Pass the slice name and an array of field names to exclude those specific fields from being persisted.
// TODO: Remove the accountSetupTransform, for demo

// const accountSetupTransform = createBlacklistTransform("accountSetupSlice", [
//    "enableNextStep",
// ]);

const persistConfig = {
   key: "root",
   version: 1,
   storage,

   // 'blacklist' to exclude entire slices from persistence
   // blacklist: ["navSlice"],

   //NOTE: 'transforms' to exclude specific fields from within slices

   // transforms: [accountSetupTransform],
};

export default persistConfig;
