import { useEffect } from "react";
import { movies$ } from "./Movies.jsx";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { majCategory } from "./Store.jsx";

export default function Category() {
    const [array, setArray] = useState([]);
    const [category, setCategory] = useState([]);
    // const dispatch = useDispatch();

    useEffect(() => {
        films();
        if (array) getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [array]);

    // récupérer le tableau en asynchrone
    async function films() {
        const film = await movies$;
        setArray(film);
    }

    //récupérer les catégories
    function getCategory() {
        let categorys = [];
        for (const film of array) {
            if (!categorys.includes(film.category))
                categorys.push(film.category);
        }
        setCategory(categorys);
    }

    //filtrer
    function filtre() {
        let category = [];
        let check = document.getElementsByName("category");
        for (const i of check) {
            if (i.checked) category.push(i.value);
        }
        // dispatch(majCategory(category));
        console.log(category);
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
