import "./App.css";
import Generate from "./Component/Generate.jsx";
import PanelControl from "./Component/PanelControl.jsx";

function App() {
    return (
        <div className="App">
            <h1>Mes films préférés</h1>
            <Generate />
            <PanelControl />
        </div>
    );
}

export default App;
