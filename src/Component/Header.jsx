import Category from "./Category.jsx";
import ChoosePaginate from "./ChoosePaginate.jsx";
import Init from "./Init.jsx";
import Mode from "./Mode.jsx";
import ActivatePanel from "./ActivatePanel";

export default function Header() {
    return (
        <div className="container">
            <div className="container2">
                <ActivatePanel />
                <ChoosePaginate />
            </div>
            <h1>Mes films préférés</h1>
            <div className="container2">
                <Mode />
                <Init />
            </div>
            <Category />
        </div>
    );
}
