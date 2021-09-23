import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product/Product";
import SearchAppBar from "./components/SearchAppBar";
import Container from "@mui/material/Container";
import Login from "./features/auth/login/Login";

function App() {
    return (
        <div className="App">
            <SearchAppBar />
            <Container maxWidth="lg">
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login">First Product</Link>
                                </li>
                                <li>
                                    <Link to="/products/2">Second Product</Link>
                                </li>
                            </ul>
                        </nav>

                        <Route path="/" exact component={ProductList} />
                        <Route path="/login" component={Login} />
                        <Route path="/products/:id" component={ProductList} />
                    </div>
                </Router>
            </Container>
        </div>
    );
}

export default App;
