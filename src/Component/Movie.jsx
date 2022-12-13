import { useState } from "react";
import React from "react";

export default function Movie({ movie }) {
    const [liked, setLiked] = useState(null);

    // calculer le ratio like/dislike
    function ratioBar() {
        let percentage = (movie.likes / (movie.likes + movie.dislikes)) * 100;
        return percentage;
    }

    //fermer la carte
    function closeCard() {
        let divCard = document.querySelector(`#a${movie.id}`);
        divCard.style.display = "none";
    }

    return (
        <div>
            <button className="closeCard" onClick={closeCard} title="Close">
                X
            </button>
            <div className="card-title">{movie.title}</div>
            <p>Catégorie : {movie.category}</p>
            <button variant="primary" onClick={() => setLiked(!liked)}>
                {liked ? "Dislike" : "Like"}
            </button>
            {liked && <span>❤️</span>}
            {liked === false && <span>😒</span>}
            <div className="progress-bar">
                <div
                    className="progress-bar-filled"
                    style={{ width: `${ratioBar()}%` }}
                ></div>
            </div>
        </div>
    );
}
