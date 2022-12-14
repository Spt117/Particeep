import { useEffect } from "react";
import { useState } from "react";

export default function Category({ arrayMoovie, setFilter }) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (arrayMoovie) getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrayMoovie]);

    //récupérer les catégories
    function getCategory() {
        let categorys = [];
        for (const film of arrayMoovie) {
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
        setFilter(category);
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
