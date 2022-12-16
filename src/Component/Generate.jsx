import Movie from "./Movie.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Generate() {
    const myMoovies = useSelector((state) => state.movies);
    const myFilter = useSelector((state) => state.filters);
    const numberOfMoviesbyPage = useSelector((state) => state.pages);

    const [mooviesFiltre, setMooviesFiltre] = useState([]);
    const [arrayPages, setArrayPages] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        filtre();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myMoovies, myFilter]);

    useEffect(() => {
        setPages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mooviesFiltre, myFilter, myMoovies, numberOfMoviesbyPage, pageNumber]);

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

    // on fait des tableaux enfants pour les pages
    function setPages() {
        let parentArray = [];
        for (let i = 0; i < mooviesFiltre.length; i += numberOfMoviesbyPage) {
            let child = mooviesFiltre.slice(i, i + numberOfMoviesbyPage);
            parentArray.push(child);
        }
        setArrayPages(parentArray);
    }

    return (
        <div id="generate">
            {mooviesFiltre.length <= numberOfMoviesbyPage && (
                <div className="container">
                    {mooviesFiltre?.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
            {mooviesFiltre.length > numberOfMoviesbyPage && (
                <div>
                    <div className="container">
                        {arrayPages[pageNumber]?.map((movie) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </div>
                    <div className="container">
                        <div>
                            {pageNumber >= 1 && (
                                <button
                                    className="button-pagination"
                                    onClick={() =>
                                        setPageNumber(pageNumber - 1)
                                    }
                                >
                                    Page précédente
                                </button>
                            )}
                        </div>
                        <div>
                            {pageNumber < arrayPages.length - 1 && (
                                <button
                                    className="button-pagination"
                                    onClick={() =>
                                        setPageNumber(pageNumber + 1)
                                    }
                                >
                                    Page suivante
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
