import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    filters: [],
    pages: 12,
};

const moviesReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.movies;
    }
    if (action.type === "myMovies") {
        return action.value;
    }
    return state;
};

const filtersReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.filters;
    }
    if (action.type === "myFilter") {
        return action.value;
    }
    return state;
};

const pagesReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.pages;
    }
    if (action.type === "myPage") {
        return action.value;
    }
    return state;
};

export const myMovies = (moovies) => ({
    type: "myMovies",
    value: moovies,
});

export const myFilter = (filter) => ({
    type: "myFilter",
    value: filter,
});

export const myPage = (page) => ({
    type: "myPage",
    value: page,
});

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        filters: filtersReducer,
        pages: pagesReducer,
    },
});

// store.subscribe(() => {
//     console.log(store.getState());
// });
