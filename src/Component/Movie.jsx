import { useState, useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { myMovies } from "./store.jsx";

export default function Movie({ movie }) {
    const [liked, setLiked] = useState(null);
    const [like, setlike] = useState(0);
    const [disLike, setDislike] = useState(0);
    const [ratio, setRatio] = useState(0);
    const myMoovies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        likes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [liked, like, disLike]);

    //mettre en place les likes et dislike avec MAJ
    function likes() {
        setlike(movie.likes);
        setDislike(movie.dislikes);
        if (liked) {
            setlike(movie.likes + 1);
            setDislike(movie.dislikes);
        } else if (liked === false) {
            setlike(movie.likes);
            setDislike(movie.dislikes + 1);
        }
        ratioBar();
    }

    // calculer le ratio like/dislike
    function ratioBar() {
        let percentage = (like / (like + disLike)) * 100;
        setRatio(percentage);
    }

    //fermer la carte
    function closeCard(e) {
        const newMoovies = myMoovies.filter((film) => film.id !== movie.id);
        dispatch(myMovies(newMoovies));
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
                    style={{ width: `${ratio}%` }}
                ></div>
            </div>
            <div id="like">
                <div>{like} 🥰</div>
                <div>{disLike} 😒</div>
            </div>
        </div>
    );
}
