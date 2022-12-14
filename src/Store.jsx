import { createStore } from "redux";
import produce from "immer";

const initialState = {
    Movies: [],
    Filters: [],
    Pages: 0,
};

// export function getMyMovies(moovies) {
//     console.log(moovies);
//     return {
//         type: "getMyMovies",
//         newMoovies: moovies,
//     };
// }

// function reducer(state = initialState, action) {
//     if (action.type === "getMyMovies")
//         return {
//             ...state,
//             myMovies: getMyMovies.newMoovies,
//         };
//     return state;
// }

export const myMovies = (moovies) => ({
    type: "myMovies",
    value: moovies,
});

export const myFilter = (filter) => ({
    type: "myFilter",
    value: filter,
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
    return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
    // console.log("Nouveau state:");
    console.log(store.getState());
});
