import { movies$ } from "./Movies.jsx";
import Movie from "./Movie.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMyMovies } from "../Store.jsx";
// import { useSelector } from "react-redux";

export default function Generate() {
    const [array, setArray] = useState([]);
    const dispatch = useDispatch();
    // const moovies = useSelector((state) => state.myMovies);

    useEffect(() => {
        // console.log(moovies);
        films();
    }, [array]);

    // récupérer le tableau en asynchrone
    async function films() {
        const film = await movies$;
        setArray(film);
        dispatch(getMyMovies([0]));
    }

    if (array.length > 0)
        return (
            <div>
                <div id="container">
                    {array.map((movie, index) => (
                        <div key={index} className="card" id={"a" + movie.id}>
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        );
}
