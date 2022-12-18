import Category from "./Category.jsx";
import ChoosePaginate from "./ChoosePaginate.jsx";
import Init from "./Init.jsx";
import Mode from "./Mode.jsx";

export default function PanelControl() {
    return (
        <div className="container" id="panel-apparition">
            <div id="panel">
                <h4>Panneau de contrôle</h4>
                <div className="container">
                    <Category />
                    <div>
                        <ChoosePaginate />
                        <Mode />
                    </div>
                </div>
                <Init />
            </div>
        </div>
    );
}
