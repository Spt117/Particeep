import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { myFilter } from "./Redux/actions.js";

export default function Category() {
    const [category, setCategory] = useState([]);
    const myMoovies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        getCategory();
        reset();
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
        let arrayCheckbox = document.getElementsByName("category");
        for (const checkbox of arrayCheckbox) {
            if (checkbox.checked) category.push(checkbox.value);
        }
        dispatch(myFilter(category));
    }

    // réinitialiser les catégories
    function reset() {
        const button = document.querySelector("#reset");
        let arrayCheckbox = document.getElementsByName("category");
        button.addEventListener("click", (event) => {
            for (const checkbox of arrayCheckbox) {
                checkbox.checked = false;
            }
        });
    }

    //fermer le panneau de contrôle
    function closePanel() {
        const panel = document.querySelector("#panel");
        panel.style.display = "none";
    }

    return (
        <div id="panel">
            <button className="closeCard" onClick={closePanel} title="Close">
                X
            </button>
            <h4>Filtres</h4>
            <div id="category">
                <ul>
                    {category.map((category, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value={category}
                                    onChange={filtre}
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
