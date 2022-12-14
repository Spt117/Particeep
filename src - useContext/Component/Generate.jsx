import Movie from "./Movie.jsx";
import { useMoovie } from "../Context";

export default function Generate() {
    const {
        state: { myMoovies },
    } = useMoovie();

    if (myMoovies.length > 0)
        return (
            <div>
                <div id="container">
                    {myMoovies.map((movie, index) => (
                        <div key={index} className="card" id={"a" + movie.id}>
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        );
}
