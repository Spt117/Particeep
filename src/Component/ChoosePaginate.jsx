import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { myPage } from "../store.jsx";

export default function ChoosePaginate() {
    const dispatch = useDispatch();

    useEffect(() => {
        getPaginate();
        // eslint-disable-next-line
    }, []);

    // envoyer la pagination dans le state
    function getPaginate() {
        let value = document.querySelector("#paginate");
        dispatch(myPage(value.value));
    }

    return (
        <div>
            <label htmlFor="paginate">Nombre de films par pages </label>
            <select name="pages" id="paginate" onChange={getPaginate}>
                <option value="12">12</option>
                <option value="8">8</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}
