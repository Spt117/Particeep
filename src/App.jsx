import "./App.css";
import Generate from "./Component/Generate.jsx";
import ChoosePaginate from "./Component/ChoosePaginate.jsx";
import Category from "./Component/Category.jsx";
import Init from "./Component/Init.jsx";

function App() {
    return (
        <div className="App">
            <Init />
            <h1>Mes films préférés</h1>
            <Generate />
            <ChoosePaginate />
            <Category />
        </div>
    );
}

export default App;
