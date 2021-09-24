import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product/Product";
import SearchAppBar from "./components/app_bar/SearchAppBar";
import Container from "@mui/material/Container";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import WishList from "./features/wishlist/WishList";
import PrivateRoute from "./components/route/PrivateRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <SearchAppBar />
                <Container maxWidth="lg">
                    <div>
                        <Switch>
                            <Route path="/" exact component={ProductList} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/products" component={ProductList} />
                            <PrivateRoute path="/wishlists">
                                <WishList />
                            </PrivateRoute>
                        </Switch>
                    </div>
                </Container>
            </Router>
        </div>
    );
}

export default App;
