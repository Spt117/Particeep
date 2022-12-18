const initialState = {
    movies: [],
    filters: [],
    pages: 12,
    mode: "gradient",
    animation: "App"
};

export const moviesReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.movies;
    }
    if (action.type === "myMovies") {
        return action.value;
    }
    return state;
};

export const filtersReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.filters;
    }
    if (action.type === "myFilter") return action.value;

    return state;
};

export const pagesReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.pages;
    }
    if (action.type === "myPage") return action.value;

    return state;
};

export const modeReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.mode;
    }
    if (action.type === "myMode") return action.value;

    return state;
};

export const animationReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.animation;
    }
    if (action.type === "myAnimation") return action.value;
    return state;
}