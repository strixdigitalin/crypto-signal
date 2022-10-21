import { configureStore } from "@reduxjs/toolkit";
// import { usersApi } from "../services/users";
import DataReducer from "./reducers/dataSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
//persit
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';

const userInvestmentsPersit = {
    key: 'invsetment',
    storage: storage,
    blacklist: ['somethingTemporary']
}
 
export const store = configureStore({
    reducer: {
        userInvestments: persistReducer(userInvestmentsPersit, DataReducer),
        // userInvestments: DataReducer,
    },
    //   middleware: (GDM) => GDM().concat(usersApi.middleware),
});

const persistor = persistStore(store);
export { persistor }
setupListeners(store.dispatch);
