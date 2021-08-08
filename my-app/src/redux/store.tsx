import { configureStore} from "@reduxjs/toolkit";
import tokenReducer from './token'

const store = configureStore({
    reducer: {
        token: tokenReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;