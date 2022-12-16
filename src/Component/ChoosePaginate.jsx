import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { myPage } from "./Redux/actions.js";

export default function ChoosePaginate() {
    const dispatch = useDispatch();

    useEffect(() => {
        getPaginate();
        reset();
        // eslint-disable-next-line
    }, []);

    // envoyer la pagination dans le state
    function getPaginate() {
        let value = document.querySelector("#paginate");
        dispatch(myPage(Number(value.value)));
    }

    // réinitialiser le paginate
    function reset() {
        const button = document.querySelector("#reset");
        const paginate = document.querySelector("#paginate");
        button.addEventListener("click", (event) => {
            paginate.value = 12;
        });
    }

    return (
        <div>
            <label htmlFor="paginate" id="label-paginate">
                Films par pages{" "}
            </label>
            <select name="pages" id="paginate" onChange={getPaginate}>
                <option value="12">12</option>
                <option value="8">8</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}
