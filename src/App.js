import "./App.css";
import { Home } from "./component/Home";
import Category  from "./component/Category";
import { Products } from "./component/Products";
import { Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav">
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
