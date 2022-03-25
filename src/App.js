import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App container">
            <Header />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
