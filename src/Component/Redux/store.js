import { configureStore } from "@reduxjs/toolkit";
import {
    moviesReducer,
    filtersReducer,
    pagesReducer,
    modeReducer,
    animationReducer,
} from "./reducers.js";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        filters: filtersReducer,
        pages: pagesReducer,
        mode: modeReducer,
        animation: animationReducer
    },
});

store.subscribe(() => {
    console.log(store.getState());
});
