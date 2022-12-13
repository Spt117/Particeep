import { movies$ } from "./Movies.jsx";
import Movie from "./Movie.jsx";
import { useEffect } from "react";
import { useState } from "react";

export default function Generate() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        films();
    }, []);

    // récupérer le tableau en asynchrone
    async function films() {
        const film = await movies$;
        setArray(film);
    }

    function handleChange() {}

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
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="option1"
                            onChange={handleChange}
                        />
                        Option 1
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option2"
                            onChange={handleChange}
                        />
                        Option 2
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option3"
                            onChange={handleChange}
                        />
                        Option 3
                    </label>
                </div>
            </div>
        );
}
