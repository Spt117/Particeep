import Category from "./Category.jsx";
import ChoosePaginate from "./ChoosePaginate.jsx";
import Init from "./Init.jsx";
import Mode from "./Mode.jsx";
import ActivatePanel from "./ActivatePanel";

export default function PanelControl() {

        //fermer le panneau de contrôle
        function closePanel() {
            const panel = document.querySelector("#panel");
            panel.style.display = "none";
        }

    return (
        <div className="container">
        <div className="container2">
            <ActivatePanel/>
                        <ChoosePaginate />
            </div>
            <h1>Mes films préférés</h1>

        <div className="container2">
                        <Mode />
                <Init />
            </div>
            <div id="panel">
                        <button className="closeCard" onClick={closePanel} title="Close">
                X
            </button>
                    <Category />
            </div>
        </div>
    );
}
