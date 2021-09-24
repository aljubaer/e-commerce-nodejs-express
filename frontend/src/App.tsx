import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product/Product";
import SearchAppBar from "./components/app_bar/SearchAppBar";
import Container from "@mui/material/Container";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";

function App() {
    return (
        <div className="App">
            <Router>
            <SearchAppBar />
            <Container maxWidth="lg">
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
                        <Route path="/register" component={Register} />
                        <Route path="/products/" component={ProductList} />
                    </div>
            </Container>
            </Router>
        </div>
    );
}

export default App;
