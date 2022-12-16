import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { myFilter } from "../store.jsx";

export default function Category() {
    const [category, setCategory] = useState([]);
    const myMoovies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (myMoovies !== undefined) getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myMoovies]);

    //récupérer les catégories
    function getCategory() {
        let categorys = [];
        for (const film of myMoovies) {
            if (!categorys.includes(film.category))
                categorys.push(film.category);
        }
        setCategory(categorys);
    }

    //envoyer les filtres dans le state
    function filtre() {
        let category = [];
        let check = document.getElementsByName("category");
        for (const i of check) {
            if (i.checked) category.push(i.value);
        }
        dispatch(myFilter(category));
    }

    return (
        <div>
            <span>Filtrer par catégories </span>
            {category.map((category, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        name="category"
                        value={category}
                        onChange={filtre}
                    />
                    {category}
                </label>
            ))}
        </div>
    );
}
