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

    // on fait des sous tableau par pages
    function setPages() {
        let parentArray = [];
        for (let i = 0; i < mooviesFiltre.length; i += numberOfMoviesbyPage) {
            let child = mooviesFiltre.slice(i, i + numberOfMoviesbyPage);
            parentArray.push(child);
        }
        setArrayPages(parentArray);
    }

    //fonction pour changer de page
    function changePage(page) {
        setPageNumber(pageNumber + page);
    }

    return (
        <div>
            {mooviesFiltre.length <= numberOfMoviesbyPage && (
                <div id="container">
                    {mooviesFiltre?.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
            {mooviesFiltre.length > numberOfMoviesbyPage && (
                <div>
                    <div id="container">
                        {arrayPages[pageNumber]?.map((movie) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </div>
                    <div id="container">
                        {pageNumber >= 1 && (
                            <button onClick={() => changePage(-1)}>
                                Page précédente
                            </button>
                        )}
                        {pageNumber < arrayPages.length - 1 && (
                            <button onClick={() => changePage(1)}>
                                Page suivante
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
