import "./App.css";
import Generate from "./Component/Generate.jsx";
import ChoosePaginate from "./Component/ChoosePaginate.jsx";
import Category from "./Component/Category.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
    const redux = useSelector((state) => state);
    useEffect(() => {
        console.log(redux);
    }, [redux]);

    return (
        <div className="App">
            <h1>Mes films préférés</h1>
            <Generate />
            <ChoosePaginate />
            <Category />
        </div>
    );
}

export default App;
