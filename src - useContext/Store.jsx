import { createStore } from "redux";

const initialState = {
    myMovies: [],
    myFilter: [],
    myPages: 0,
};

export function getMyMovies(moovies) {
    console.log(moovies);
    return {
        type: "getMyMovies",
        newMoovies: moovies,
    };
}

function reducer(state = initialState, action) {
    if (action.type === "getMyMovies")
        return {
            ...state,
            myMovies: getMyMovies.newMoovies,
        };
    return state;
}

export const store = createStore(reducer);
