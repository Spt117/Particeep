import { useEffect } from "react";
// import { useDispatch } from "react-redux";
export default function ChoosePaginate() {
    // const dispatch = useDispatch();

    useEffect(() => {
        getPaginate();
    }, []);

    function getPaginate() {
        let value = document.querySelector("#paginate");
        return value.value;
    }

    return (
        <div>
            <label htmlFor="paginate">Nombre de films par pages </label>
            <select name="pages" id="paginate" onChange={getPaginate}>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
            </select>
        </div>
    );
}
