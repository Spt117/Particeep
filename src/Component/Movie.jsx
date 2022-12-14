import { useState, useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { myMovies } from "../store.jsx";

export default function Movie({ movie }) {
    const [liked, setLiked] = useState(null);
    const myMoovies = useSelector((state) => state.Movies);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(movie);
    }, [myMoovies]);

    // calculer le ratio like/dislike
    function ratioBar() {
        let percentage = (movie.likes / (movie.likes + movie.dislikes)) * 100;
        return percentage;
    }

    //fermer la carte
    function closeCard(event) {
        event.preventDefault();
        const card = document.querySelector(`#card-${movie.id}`);
        card.style.display = "none";
        const newMoovies = myMoovies.filter((film) => film.id !== movie.id);
        dispatch(myMovies(newMoovies));
        event.stopImmediatePropagation();
    }

    return (
        <div className="card" id={`card-${movie.id}`}>
            <button className="closeCard" onClick={closeCard} title="Close">
                X
            </button>
            <div className="card-title">{movie.title}</div>
            <p>Catégorie : {movie.category}</p>
            <button variant="primary" onClick={() => setLiked(!liked)}>
                {liked ? "Dislike" : "Like"}
            </button>
            {liked && <span> Vous aimez ❤️</span>}
            {liked === false && <span> Vous n'aimez pas 😒</span>}
            <div className="progress-bar">
                <div
                    className="progress-bar-filled"
                    style={{ width: `${ratioBar()}%` }}
                ></div>
            </div>
        </div>
    );
}
