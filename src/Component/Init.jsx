import { useEffect } from "react";
import { movies$ } from "./Movies.jsx";
import { useDispatch } from "react-redux";
import { myFilter, myMovies, myPage, myMode } from "./Redux/actions.js";
import { useSelector } from "react-redux";

export default function Init() {
    const dispatch = useDispatch();
    const theMode = useSelector((state) => state.mode);
    const theAnimation = useSelector((state) => state.animation);

    useEffect(() => {
        getMoovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        theme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theMode]);

    useEffect(() => {
        animation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theAnimation]);

    //Récupérer les films
    async function getMoovies() {
        const moovies = await movies$;
        dispatch(myMovies(moovies));
    }

    //récupérer le thème
    function theme() {
        document.querySelector(".modes").id = theMode;
    }

    // activer animations
    function animation() {
        document.querySelector(".app").id = theAnimation;
    }

    //fonction pour réinitialiser le state sauf l'animation
    function resetState() {
        getMoovies();
        dispatch(myFilter([]));
        dispatch(myPage(12));
        dispatch(myMode("gradient"));
    }

    return (
        <div>
            <button className="button-header" id="reset" onClick={resetState}>
                <span>Réinitialiser</span>
            </button>
        </div>
    );
}
