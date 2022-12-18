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
    const [bool, setBool] = useState(false);

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
        if (!bool) displayNone();
        let parentArray = [];
        for (let i = 0; i < mooviesFiltre.length; i += numberOfMoviesbyPage) {
            let child = mooviesFiltre.slice(i, i + numberOfMoviesbyPage);
            parentArray.push(child);
        }
        setArrayPages(parentArray);
        if (!bool) {
            for (let i = 0; i < mooviesFiltre.length; i++) {
                block(`#card-${mooviesFiltre[i].id}`, i * 300);
            }
            if (mooviesFiltre.length > 0) {
                block("#panel", mooviesFiltre.length * 310);
                stopAnimation();
            }
        }
    }

    //on désactive les div pour l'animation
    function displayNone() {
        for (let i = 0; i < mooviesFiltre.length; i++) {
            const card = document.querySelector(`#card-${mooviesFiltre[i].id}`);
            card.style.display = "none";
        }
        const pannel = document.querySelector(`#panel`);
        pannel.style.display = "none";
    }

    // on réactive les div avec un timer
    function block(id, time) {
        setTimeout(() => {
            const card = document.querySelector(id);
            card.style.display = "block";
        }, time);
    }

    // on désactive l'animation
    function stopAnimation() {
        const cards = document.querySelector(".card");
        console.log(cards.style);
        setTimeout(() => {
            setBool(true);
            cards.classList.remove("card");
        }, mooviesFiltre.length * 310);
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
