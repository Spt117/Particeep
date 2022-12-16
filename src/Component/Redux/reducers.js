const initialState = {
    movies: [],
    filters: [],
    pages: 12,
    likes: [],
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

export const likesReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.likes;
    }
    if (action.type === "myLikes") return action.value;

    return state;
};
