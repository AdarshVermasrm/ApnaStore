import "./App.css";
import Product from "./Component/Product";
import ProductDetail from "./Component/ProductDetail";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Product} />
          <Route
            path="/product/:productId"
            exact
            Component={ProductDetail}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

