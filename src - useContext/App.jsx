import "./App.css";
import Generate from "./Component/Generate.jsx";
import ChoosePaginate from "./Component/ChoosePaginate.jsx";
// import Category from "./Component/Category.jsx";
import MoovieProvider from "./Context/MoovieProvider.jsx";

function App() {
    return (
        <div className="App">
            <MoovieProvider>
                <h1>Mes films préférés</h1>
                <Generate />
                <ChoosePaginate />
                {/* <Category /> */}
            </MoovieProvider>
        </div>
    );
}

export default App;
