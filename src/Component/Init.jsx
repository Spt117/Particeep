import { useEffect } from "react";
import { movies$ } from "./Movies.jsx";
import { useDispatch } from "react-redux";
import { myFilter, myMovies, myPage, myMode } from "./Redux/actions.js";
import { useSelector } from "react-redux";

export default function Init() {
    const dispatch = useDispatch();
    const theMode = useSelector((state) => state.mode);

    useEffect(() => {
        getMoovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        theme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theMode]);

    //Récupérer les films
    async function getMoovies() {
        const moovies = await movies$;
        dispatch(myMovies(moovies));
    }

    //récupérer le thème
    function theme() {
        document.querySelector(".modes").id = theMode;
    }

    //fonction pour réinitialiser le state
    function resetState() {
        getMoovies();
        dispatch(myFilter([]));
        dispatch(myPage(12));
        dispatch(myMode("gradient"));
    }

    return (
        <div>
            <button id="reset" onClick={resetState}>
                Réinitialiser le state
            </button>
        </div>
    );
}
