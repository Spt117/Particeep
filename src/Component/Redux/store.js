import { configureStore } from "@reduxjs/toolkit";
import {
    moviesReducer,
    filtersReducer,
    pagesReducer,
    modeReducer,
} from "./reducers.js";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        filters: filtersReducer,
        pages: pagesReducer,
        mode: modeReducer,
    },
});

// store.subscribe(() => {
//     console.log(store.getState());
// });
