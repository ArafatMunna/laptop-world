import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
    return (
        <div className="App container">
            <Header />
            <Products />
        </div>
    );
}

export default App;
