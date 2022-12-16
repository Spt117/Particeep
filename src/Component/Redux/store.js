import { configureStore } from "@reduxjs/toolkit";
import {
    moviesReducer,
    filtersReducer,
    pagesReducer,
    likesReducer,
} from "./reducers.js";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        filters: filtersReducer,
        pages: pagesReducer,
        likes: likesReducer,
    },
});

// store.subscribe(() => {
//     console.log(store.getState());
// });
