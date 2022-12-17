import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { myMode } from "./Redux/actions.js";

export default function Mode() {
    const dispatch = useDispatch();

    useEffect(() => {
        reset();
    }, []);

    function mode() {
        const button = document.querySelector("#hide-checkbox");
        if (button.checked) {
            dispatch(myMode("black"));
            button.checked = true;
        } else {
            dispatch(myMode("gradient"));
            button.checked = false;
        }
    }

    //réinitialiser le bouton
    function reset() {
        const reset = document.querySelector("#reset");
        const button = document.querySelector("#hide-checkbox");
        reset.addEventListener("click", (event) => {
            button.checked = false;
        });
    }

    return (
        <div className="wrapper">
            <h5 id="mode">Mode</h5>
            <input type="checkbox" id="hide-checkbox" onChange={mode} />
            <label htmlFor="hide-checkbox" className="toggle">
                <span className="toggle-button">
                    <span className="crater crater-1"></span>
                    <span className="crater crater-2"></span>
                    <span className="crater crater-3"></span>
                    <span className="crater crater-4"></span>
                    <span className="crater crater-5"></span>
                    <span className="crater crater-6"></span>
                    <span className="crater crater-7"></span>
                </span>
                <span className="star star-1"></span>
                <span className="star star-2"></span>
                <span className="star star-3"></span>
                <span className="star star-4"></span>
                <span className="star star-5"></span>
                <span className="star star-6"></span>
                <span className="star star-7"></span>
                <span className="star star-8"></span>
            </label>
        </div>
    );
}
