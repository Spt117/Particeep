import Movie from "./Movie.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function Generate() {
    const myMoovies = useSelector((state) => state.Movies);
    const myFilter = useSelector((state) => state.Filters);
    const [mooviesFiltre, setMooviesFiltre] = useState([]);

    useEffect(() => {
        filtre();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myMoovies, myFilter]);

    //on filtre en fonction des categories sélectionnées
    function filtre() {
        let array = [];
        if (myFilter.length === 0) {
            setMooviesFiltre(myMoovies);
        } else {
            for (const filtres of myFilter) {
                for (const films of myMoovies) {
                    if (filtres === films.category) array.push(films);
                }
            }
            setMooviesFiltre(array);
        }
    }

    return (
        <div>
            <div id="container">
                {mooviesFiltre.map((movie, index) => (
                    <Movie key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}
