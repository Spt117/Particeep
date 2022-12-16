import "./App.css";
import Generate from "./Component/Generate.jsx";
import ChoosePaginate from "./Component/ChoosePaginate.jsx";
import Category from "./Component/Category.jsx";
import Init from "./Component/Init.jsx";

function App() {
    return (
        <div className="App">
            <h1>Mes films préférés</h1>
            <Generate />
            <div className="container">
                <div id="panel">
                    <h4>Panneau de contrôle</h4>
                    <div className="container">
                        <Category />
                        <ChoosePaginate />
                    </div>
                    <Init />
                </div>
            </div>
        </div>
    );
}

export default App;
