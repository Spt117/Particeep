import { useReducer, useCallback, useEffect, useState } from "react";
import { reducer, actions, initialState } from "./state";
import MoovieContext from "./MoovieContext.jsx";
import { movies$ } from "../Component/Movies.jsx";
import Category from "../Component/Category.jsx";

export default function MoovieProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [pages, setPages] = useState(4);
    const [filter, setFilter] = useState([]);
    const [arrayMoovie, setArrayMoovie] = useState([]);

    const init = useCallback(() => {
        let myMoovies = [];
        if (filter.length === 0) {
            myMoovies = arrayMoovie;
            setPages(12);
        } else {
            for (const filtres of filter) {
                for (const films of arrayMoovie) {
                    if (filtres === films.category) myMoovies.push(films);
                }
            }
        }
        dispatch({
            type: actions.init,
            data: { myMoovies, filter, pages },
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrayMoovie, filter]);

    //Récupérer les films
    async function getMoovies() {
        const moovies = await movies$;
        setArrayMoovie(moovies);
    }

    useEffect(() => {
        getMoovies();
    }, []);

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrayMoovie, filter]);

    return (
        <div>
            <MoovieContext.Provider value={{ state, dispatch }}>
                {children}
            </MoovieContext.Provider>
            <Category arrayMoovie={arrayMoovie} setFilter={setFilter} />
        </div>
    );
}
