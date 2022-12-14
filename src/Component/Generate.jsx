import Movie from "./Movie.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Generate() {
    const myMoovies = useSelector((state) => state.Movies);
    const myFilter = useSelector((state) => state.Filters);
    const myPages = useSelector((state) => state.Pages);
    const [mooviesFiltre, setMooviesFiltre] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        filtre();
        calculePages();
        setPages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myMoovies, myFilter, myPages]);

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

    // on calcule le nombre de pages
    function calculePages() {
        const number = myMoovies.length / myPages;
        setPageNumber(Math.ceil(number));
    }

    // on fait des sous tableau par pages
    function setPages() {
        let parentArray = [];
        // for (let i = 0; i < myMoovies.length; i += myPages) {
        //     parentArray.push(myMoovies.slice(i, i + myPages));
        //     console.log(myPages);
        // }
        for (let i = 0; i < myMoovies.length; i++) {
            // Découpe l'array en plusieurs array avec myPages éléments chacun
            if (i % myPages === 0) {
                parentArray.push(myMoovies.slice(i, i + myPages));
            }
        }
        console.log(parentArray);
    }

    return (
        <div>
            <div id="container">
                {mooviesFiltre.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
            <div id="pages">{}</div>
        </div>
    );
}
