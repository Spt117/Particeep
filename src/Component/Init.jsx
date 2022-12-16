import { useEffect } from "react";
import { movies$ } from "./Movies.jsx";
import { useDispatch } from "react-redux";
import { myMovies } from "./store.jsx";

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
}
