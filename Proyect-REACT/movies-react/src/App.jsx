/*import { MoviesGrid } from "./componentes/MoviesGrid";*/
import styles from "./App.module.css";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPage";


export function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId">
                        <MovieDetails />
                    </Route>
                    <Route path="/">
                        <LandingPages />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}