import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
    Movies: [],
    Filters: [],
    Pages: 12,
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

function reducer(state = initialState, action) {
    if (action.type === "myMovies") {
        return produce(state, (draft) => {
            draft.Movies = action.value;
        });
    }
    if (action.type === "myFilter") {
        return produce(state, (draft) => {
            draft.Filters = action.value;
        });
    }
    if (action.type === "myPage") {
        return produce(state, (draft) => {
            draft.Pages = action.value;
        });
    }
    return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
    // console.log("Nouveau state:");
    // console.log(store.getState());
});
