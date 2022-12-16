import { useEffect } from "react";
import { movies$ } from "./Movies.jsx";
import { useDispatch } from "react-redux";
import { myFilter, myMovies, myPage } from "./Redux/actions.js";

export default function Init() {
    const dispatch = useDispatch();

    useEffect(() => {
        getMoovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Récupérer les films
    async function getMoovies() {
        const moovies = await movies$;
        dispatch(myMovies(moovies));
    }

    //fonction pour réinitialiser le state
    function resetState() {
        getMoovies();
        dispatch(myFilter([]));
        dispatch(myPage(12));
    }

    return (
        <div>
            <button id="reset" onClick={resetState}>
                Réinitialiser le state
            </button>
        </div>
    );
}
